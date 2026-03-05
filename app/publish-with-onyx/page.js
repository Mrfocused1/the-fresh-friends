'use client';

import dynamic from 'next/dynamic';

const PublishWithOnyxContent = dynamic(
  () => import('./_content'),
  { ssr: false }
);

export default function PublishWithOnyx() {
  return <PublishWithOnyxContent />;
}
