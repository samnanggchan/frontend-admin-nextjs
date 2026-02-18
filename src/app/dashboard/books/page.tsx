'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { booksInfoContent } from '@/config/infoconfig';
import { useState } from 'react';

export default function BooksPage() {
  const [books] = useState([
    { id: '1', name: 'Main Book', description: 'Your primary book' },
    { id: '2', name: 'Secondary Book', description: 'Additional book for testing' }
  ]);

  return (
    <PageContainer
      pageTitle='Books'
      pageDescription='Manage your books and switch between them'
      infoContent={booksInfoContent}
    >
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Your Books</h3>
          <Button>
            <Plus className='mr-2 h-4 w-4' />
            New Book
          </Button>
        </div>
        <div className='grid gap-4'>
          {books.map((book) => (
            <Card key={book.id} className='cursor-pointer hover:bg-accent transition-colors'>
              <CardHeader>
                <CardTitle>{book.name}</CardTitle>
                <CardDescription>{book.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
