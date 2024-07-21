import React, { useState } from 'react';

export function Select({ value, onChange, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (newValue) => {
    onChange(newValue); 
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <SelectTrigger onClick={() => setIsOpen(!isOpen)} className="w-[180px]">
        <SelectValue placeholder={value || "Filter by User"} />
      </SelectTrigger>
      {isOpen && (
        <SelectContent>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onSelect: handleSelect })
          )}
        </SelectContent>
      )}
    </div>
  );
}


export function SelectTrigger({ children, className, onClick }) {
  return (
    <button
      type="button"
      className={`inline-flex justify-center w-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-sm text-gray-700">{placeholder}</span>;
}

export function SelectContent({ children }) {
  return (
    <div className="absolute right-0 mt-2 w-[180px] bg-white border border-gray-200 rounded-md shadow-lg z-10">
      {children}
    </div>
  );
}

export function SelectItem({ value, children, onSelect }) {
  if (typeof onSelect !== 'function') {
    console.error('SelectItem: onSelect is not a function');
    return null;
  }
  
  return (
    <div
      onClick={() => onSelect(value)}
      className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {children}
    </div>
  );
}

