'use client';

import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { teamInfoContent } from '@/config/infoconfig';
import { useState } from 'react';

export default function TeamPage() {
  const [members] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'member' },
    { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'member' }
  ]);

  return (
    <PageContainer
      pageTitle='Team Management'
      pageDescription='Manage your workspace team, members, roles, security and more.'
      infoContent={teamInfoContent}
    >
      <div className='space-y-6'>
        <Card>
          <CardHeader>
            <CardTitle>Team Members</CardTitle>
            <CardDescription>Manage and invite team members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className='space-y-4'>
              {members.map((member) => (
                <div key={member.id} className='flex items-center justify-between p-3 border rounded-lg'>
                  <div>
                    <p className='font-medium'>{member.name}</p>
                    <p className='text-sm text-muted-foreground'>{member.email}</p>
                  </div>
                  <Badge variant={member.role === 'admin' ? 'default' : 'secondary'}>
                    {member.role}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
