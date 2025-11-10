'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import ScheduleCallModal from './ScheduleCallModal';
import CallConfirmation from './CallConfirmation';

interface ScheduleCallButtonProps {
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'ghost';
  className?: string;
  size?: 'default' | 'sm' | 'lg';
}

export default function ScheduleCallButton({
  buttonText = 'Schedule a Call',
  buttonVariant = 'default',
  className,
  size = 'lg',
}: ScheduleCallButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSuccess = () => {
    setShowModal(false);
    setShowConfirmation(true);
  };

  return (
    <>
      <Button
        variant={buttonVariant}
        size={size}
        className={className}
        onClick={() => setShowModal(true)}
      >
        <Calendar className="w-4 h-4 mr-2" />
        {buttonText}
      </Button>

      <ScheduleCallModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={handleSuccess}
      />

      <CallConfirmation
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </>
  );
}