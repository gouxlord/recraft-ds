import React, { useState, useRef, ReactNode } from 'react';
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

export interface UploadedFileInfo {
  file: File;
  id: string;
  name: string;
  size: number;
  type: string;
  status: 'uploaded' | 'uploading' | 'error';
}

export interface FileUploadProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onFileSelect?: (files: File | File[] | null) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  disabled?: boolean;
}

const FileUpload = ({
  onFileSelect,
  accept = '*/*',
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB
  className,
  disabled,
  ...props
}: FileUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileInfo[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const getFileIcon = (file: File): ReactNode => {
    const type = file.type;
    const size = 20;
    
    if (type.startsWith('image/')) return <Image size={size} className="text-hr-skill" weight="duotone" />;
    if (type === 'application/pdf') return <FilePdf size={size} className="text-destructive" weight="duotone" />;
    if (type.includes('word') || type.includes('document')) return <FileDoc size={size} className="text-hr-skill" weight="duotone" />;
    return <File size={size} className="text-muted-foreground" weight="duotone" />;
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file: File): string[] => {
    const errors: string[] = [];
    
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

  const handleFiles = (files: FileList) => {
    const fileList = Array.from(files);
    const newErrors: string[] = [];
    const validFiles: UploadedFileInfo[] = [];

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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    if (disabled) return;
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  const removeFile = (fileId: string) => {
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
          'relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all focus-ring',
          'hover:border-primary hover:bg-primary/5',
          isDragOver && 'border-primary bg-primary/10',
          disabled && 'opacity-50 cursor-not-allowed',
          uploadedFiles.length === 0 ? 'border-border' : 'border-status-success/30 bg-status-success-light'
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
            uploadedFiles.length === 0 ? 'bg-muted' : 'bg-status-success-light'
          )}>
            {uploadedFiles.length === 0 ? (
              <UploadSimple size={24} className="text-muted-foreground" weight="duotone" />
            ) : (
              <CheckCircle size={24} className="text-status-success" weight="duotone" />
            )}
          </div>
          
          <div>
            {uploadedFiles.length === 0 ? (
              <>
                <p className="text-sm font-medium text-foreground">
                  Glissez vos fichiers ici ou cliquez pour sélectionner
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {accept !== '*/*' && `Formats acceptés: ${accept}`}
                  {maxSize && ` • Taille max: ${formatFileSize(maxSize)}`}
                  {multiple && ` • Fichiers multiples autorisés`}
                </p>
              </>
            ) : (
              <p className="text-sm font-medium text-status-success">
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
            <p key={index} className="text-sm text-destructive flex items-center gap-2">
              <X size={14} />
              {error}
            </p>
          ))}
        </div>
      )}

      {/* File List */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Fichiers sélectionnés:</p>
          <div className="space-y-2">
            {uploadedFiles.map((fileInfo) => (
              <div
                key={fileInfo.id}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {getFileIcon(fileInfo.file)}
                  <div>
                    <p className="text-sm font-medium text-foreground">{fileInfo.name}</p>
                    <p className="text-xs text-muted-foreground">{formatFileSize(fileInfo.size)}</p>
                  </div>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(fileInfo.id);
                  }}
                  className="p-1 hover:bg-muted rounded transition-colors focus-ring"
                >
                  <X size={16} className="text-muted-foreground" />
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