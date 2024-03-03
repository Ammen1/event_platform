import React from 'react';
import Card from './Card';
import Pagination from './Pagination';
import { IEvent } from '@/lib/database/models/event.model';
import { Button } from '../ui/button';

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events';
};

const Collection: React.FC<CollectionProps> = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <>
      <div className="flex flex-col items-center gap-10">
        {/* Render your collection items here */}
       
          <div/>
          <Button >all cards here</Button>
       
      </div>

      {/* Render pagination if there are multiple pages */}
    
    </>
  );
};

export default Collection;
