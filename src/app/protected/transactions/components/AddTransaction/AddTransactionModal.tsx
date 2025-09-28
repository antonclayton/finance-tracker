import React from 'react'

type AddTransactionModalProps = {
  isOpen?: boolean
  onClose?: () => void
  children?: React.ReactNode
}

const AddTransactionModal: React.FC<AddTransactionModalProps> = ({
  isOpen = false,
  onClose,
  children,
}) => {
  if (!isOpen) return null

  return (
    <div role="dialog" aria-modal="true">
      <div>
        {children || 'AddTransactionModal'}
        {onClose && (
          <button type="button" onClick={onClose} aria-label="Close">
            Close
          </button>
        )}
      </div>
    </div>
  )
}

export default AddTransactionModal

