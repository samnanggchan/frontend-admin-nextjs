'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { BadgeCheck } from 'lucide-react';

export default function ExclusivePage() {
  return (
    <PageContainer isloading={false}>
      <div className='space-y-6'>
        <div>
          <h1 className='flex items-center gap-2 text-3xl font-bold tracking-tight'>
            <BadgeCheck className='h-7 w-7 text-green-600' />
            Exclusive Area
          </h1>
          <p className='text-muted-foreground'>
            Welcome to the exclusive area! This page contains premium features and content.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>
              Exclusive Features
            </CardTitle>
            <CardDescription>
              You have access to premium features and advanced analytics.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='text-lg'>Have a wonderful day!</div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
