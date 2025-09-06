import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { CaretDown, Check } from '@phosphor-icons/react';

const Select = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = "Sélectionner...",
  className,
  error,
  disabled
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const selectRef = useRef(null);

  const selectedOption = options.find(opt => opt.value === value);

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn("relative", className)} ref={selectRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={cn(
          "w-full h-10 px-3 py-2 text-left bg-white border border-gray-300 rounded-lg flex items-center justify-between",
          "focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",
          "hover:border-gray-400 transition-colors",
          error && "border-error-500 focus:ring-error-500",
          disabled && "opacity-50 cursor-not-allowed bg-gray-50"
        )}
        disabled={disabled}
      >
        <span className={cn(
          "truncate",
          !selectedOption && "text-gray-400"
        )}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <CaretDown 
          size={16} 
          className={cn(
            "text-gray-400 transition-transform",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-large">
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher..."
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-3 py-2 text-sm text-gray-500">
                Aucun résultat
              </div>
            ) : (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between",
                    option.value === value && "bg-primary-50 text-primary-700"
                  )}
                >
                  <span>{option.label}</span>
                  {option.value === value && (
                    <Check size={16} className="text-primary-600" weight="bold" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;