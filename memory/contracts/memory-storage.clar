;; memory-storage.clar - Core Memory Management Contract
;; MemoryChain - Decentralized Memory Palace on Bitcoin

;; Memory data structure
(define-map memories 
    uint 
    {
        title: (string-ascii 100),
        description: (string-ascii 500), 
        ipfs-hash: (string-ascii 100),
        owner: principal,
        category: (string-ascii 20),
        created-at: uint,
        is-active: bool
    }
)

;; Memory counter for unique IDs
(define-data-var memory-counter uint u0)

;; Error constants
(define-constant ERR-NOT-AUTHORIZED (err u100))
(define-constant ERR-MEMORY-NOT-FOUND (err u101))
(define-constant ERR-EMPTY-TITLE (err u105))
(define-constant ERR-INVALID-CATEGORY (err u104))

;; Generate next memory ID
(define-private (get-next-memory-id)
    (let ((current-id (var-get memory-counter)))
        (var-set memory-counter (+ current-id u1))
        (+ current-id u1)
    )
)

;; Validate category
(define-private (is-valid-category (category (string-ascii 20)))
    (or 
        (is-eq category "photo")
        (is-eq category "document") 
        (is-eq category "video")
        (is-eq category "letter")
        (is-eq category "other")
    )
)

;; Create new memory
(define-public (create-memory 
    (title (string-ascii 100))
    (description (string-ascii 500))
    (ipfs-hash (string-ascii 100))
    (category (string-ascii 20))
)
    (let (
        (memory-id (get-next-memory-id))
        (caller tx-sender)
    )
        ;; Input validation
        (asserts! (> (len title) u0) ERR-EMPTY-TITLE)
        (asserts! (> (len ipfs-hash) u0) ERR-EMPTY-TITLE)
        (asserts! (is-valid-category category) ERR-INVALID-CATEGORY)
        
        ;; Create memory record
        (map-set memories memory-id {
            title: title,
            description: description,
            ipfs-hash: ipfs-hash,
            owner: caller,
            category: category,
            created-at: memory-id,
            is-active: true
        })
        
        (ok memory-id)
    )
)

;; Get memory details
(define-read-only (get-memory (memory-id uint))
    (map-get? memories memory-id)
)

;; Get total memory count
(define-read-only (get-total-memory-count)
    (var-get memory-counter)
)

;; Check if user owns memory
(define-read-only (is-memory-owner (memory-id uint) (user principal))
    (match (map-get? memories memory-id)
        memory-data 
            (and 
                (is-eq user (get owner memory-data))
                (get is-active memory-data)
            )
        false
    )
)