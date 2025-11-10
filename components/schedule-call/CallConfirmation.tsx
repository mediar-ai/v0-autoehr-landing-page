'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar } from 'lucide-react';

interface CallConfirmationProps {
  open: boolean;
  onClose: () => void;
}

export default function CallConfirmation({
  open,
  onClose,
}: CallConfirmationProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-background border rounded-lg shadow-lg max-w-md w-full mx-4 p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">You're all set!</h3>
            <p className="text-muted-foreground mb-3">
              We'll reach out within 24 hours to schedule your personalized AutoSAP.ai demo.
            </p>
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>Check your email for confirmation</span>
            </div>
          </div>

          <div className="w-full pt-4">
            <Button onClick={onClose} className="w-full">
              Got it
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}