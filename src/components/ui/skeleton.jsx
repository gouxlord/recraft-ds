import React from 'react';
import { cn } from '../../lib/utils';

const Skeleton = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-gray-200 dark:bg-gray-700',
        className
      )}
      {...props}
    />
  );
};

// Composants prédéfinis pour des cas d'usage courants
const SkeletonText = ({ lines = 3, className }) => {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            'h-4',
            i === lines - 1 ? 'w-3/4' : 'w-full'
          )}
        />
      ))}
    </div>
  );
};

const SkeletonCard = ({ className }) => {
  return (
    <div className={cn('space-y-4 p-4', className)}>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <SkeletonText lines={2} />
    </div>
  );
};

const SkeletonTable = ({ rows = 5, cols = 4, className }) => {
  return (
    <div className={cn('space-y-3', className)}>
      {/* Header */}
      <div className="flex space-x-4">
        {Array.from({ length: cols }).map((_, i) => (
          <Skeleton key={i} className="h-5 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-4">
          {Array.from({ length: cols }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-4 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
};

const SkeletonProfile = ({ className }) => {
  return (
    <div className={cn('space-y-6', className)}>
      {/* Header avec avatar */}
      <div className="flex items-start space-x-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2 flex-1">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-3 w-1/5" />
        </div>
      </div>
      
      {/* Content sections */}
      <div className="space-y-4">
        <Skeleton className="h-5 w-1/4" />
        <SkeletonText lines={3} />
      </div>
      
      <div className="space-y-4">
        <Skeleton className="h-5 w-1/3" />
        <div className="flex space-x-2">
          <Skeleton className="h-6 w-16" />
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-14" />
        </div>
      </div>
    </div>
  );
};

export { Skeleton, SkeletonText, SkeletonCard, SkeletonTable, SkeletonProfile };