import React, { useState, useRef } from 'react';
import { cn } from '../../lib/utils';
import { 
  UploadSimple, 
  File, 
  Image, 
  FilePdf, 
  FileDoc,
  X,
  CheckCircle
} from '@phosphor-icons/react';

const FileUpload = ({
  onFileSelect,
  accept = '*/*',
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB
  className,
  disabled,
  ...props
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [errors, setErrors] = useState([]);
  const fileInputRef = useRef(null);

  const getFileIcon = (file) => {
    const type = file.type;
    const size = 20;
    
    if (type.startsWith('image/')) return <Image size={size} className="text-blue-600" />;
    if (type === 'application/pdf') return <FilePdf size={size} className="text-red-600" />;
    if (type.includes('word') || type.includes('document')) return <FileDoc size={size} className="text-blue-600" />;
    return <File size={size} className="text-gray-600" />;
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file) => {
    const errors = [];
    
    if (maxSize && file.size > maxSize) {
      errors.push(`Le fichier "${file.name}" est trop volumineux (max: ${formatFileSize(maxSize)})`);
    }
    
    if (accept !== '*/*' && !accept.split(',').some(type => 
      file.type.match(type.trim()) || file.name.match(new RegExp(type.trim().replace('*', '.*')))
    )) {
      errors.push(`Le type de fichier "${file.name}" n'est pas accepté`);
    }
    
    return errors;
  };

  const handleFiles = (files) => {
    const fileList = Array.from(files);
    const newErrors = [];
    const validFiles = [];

    fileList.forEach(file => {
      const fileErrors = validateFile(file);
      if (fileErrors.length > 0) {
        newErrors.push(...fileErrors);
      } else {
        validFiles.push({
          file,
          id: Math.random().toString(36).substring(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'uploaded'
        });
      }
    });

    setErrors(newErrors);
    
    if (validFiles.length > 0) {
      const newFiles = multiple 
        ? [...uploadedFiles, ...validFiles]
        : validFiles;
      
      setUploadedFiles(newFiles);
      onFileSelect?.(multiple ? newFiles.map(f => f.file) : validFiles[0].file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (!disabled) setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const removeFile = (fileId) => {
    const newFiles = uploadedFiles.filter(f => f.id !== fileId);
    setUploadedFiles(newFiles);
    onFileSelect?.(multiple ? newFiles.map(f => f.file) : null);
  };

  return (
    <div className={cn('space-y-4', className)} {...props}>
      {/* Drop Zone */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => !disabled && fileInputRef.current?.click()}
        className={cn(
          'relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all',
          'hover:border-primary-400 hover:bg-primary-50/50',
          isDragOver && 'border-primary-500 bg-primary-50',
          disabled && 'opacity-50 cursor-not-allowed',
          uploadedFiles.length === 0 ? 'border-gray-300' : 'border-success-300 bg-success-50/30'
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
          disabled={disabled}
        />
        
        <div className="flex flex-col items-center gap-4">
          <div className={cn(
            'p-3 rounded-full',
            uploadedFiles.length === 0 ? 'bg-gray-100' : 'bg-success-100'
          )}>
            {uploadedFiles.length === 0 ? (
              <UploadSimple size={24} className="text-gray-600" />
            ) : (
              <CheckCircle size={24} className="text-success-600" />
            )}
          </div>
          
          <div>
            {uploadedFiles.length === 0 ? (
              <>
                <p className="text-sm font-medium text-gray-900">
                  Glissez vos fichiers ici ou cliquez pour sélectionner
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {accept !== '*/*' && `Formats acceptés: ${accept}`}
                  {maxSize && ` • Taille max: ${formatFileSize(maxSize)}`}
                  {multiple && ` • Fichiers multiples autorisés`}
                </p>
              </>
            ) : (
              <p className="text-sm font-medium text-success-700">
                {uploadedFiles.length} fichier{uploadedFiles.length > 1 ? 's' : ''} sélectionné{uploadedFiles.length > 1 ? 's' : ''}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Error Messages */}
      {errors.length > 0 && (
        <div className="space-y-1">
          {errors.map((error, index) => (
            <p key={index} className="text-sm text-error-600 flex items-center gap-2">
              <X size={14} />
              {error}
            </p>
          ))}
        </div>
      )}

      {/* File List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Fichiers sélectionnés:</p>
          <div className="space-y-2">
            {uploadedFiles.map((fileInfo) => (
              <div
                key={fileInfo.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {getFileIcon(fileInfo.file)}
                  <div>
                    <p className="text-sm font-medium text-gray-900">{fileInfo.name}</p>
                    <p className="text-xs text-gray-500">{formatFileSize(fileInfo.size)}</p>
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(fileInfo.id);
                  }}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <X size={16} className="text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUpload;