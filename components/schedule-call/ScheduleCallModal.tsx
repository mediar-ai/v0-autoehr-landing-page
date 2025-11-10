'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, X } from 'lucide-react';

interface ScheduleCallModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ScheduleCallModal({
  open,
  onClose,
  onSuccess,
}: ScheduleCallModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    role: '',
    companySize: '',
    useCase: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Try both endpoints for redundancy
      const [response1, response2] = await Promise.allSettled([
        fetch('/api/schedule-call', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }),
        fetch('/api/direct-notify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }),
      ]);

      // Check if at least one succeeded
      const mainResponse = response1.status === 'fulfilled' ? response1.value : null;

      if (!mainResponse || !mainResponse.ok) {
        console.error('Main endpoint failed, backup:', response2);
      }

      onSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-background border border-border rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-background border-b border-border px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-xl font-semibold">Get a Walkthrough</h2>
            <p className="text-sm text-muted-foreground">See how autoEHR works for your practice</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-8 w-8"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 overflow-y-auto flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="John"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Work Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@company.com"
              required
            />
          </div>

          <div>
            <Label htmlFor="company">Company *</Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Acme Inc."
              required
            />
          </div>

          <div>
            <Label htmlFor="role">Your Role *</Label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              required
            >
              <option value="">Select your role</option>
              <option value="admin">Admin</option>
              <option value="operations">Operations Manager</option>
              <option value="practice-manager">Practice Manager</option>
              <option value="it-manager">IT Manager</option>
              <option value="clinical">Clinical Lead</option>
              <option value="executive">Executive</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="companySize">Company Size *</Label>
            <select
              id="companySize"
              name="companySize"
              value={formData.companySize}
              onChange={handleInputChange}
              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
              required
            >
              <option value="">Select company size</option>
              <option value="1-50">1-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>
          </div>

          <div>
            <Label htmlFor="useCase">What are your intake challenges? *</Label>
            <textarea
              id="useCase"
              name="useCase"
              value={formData.useCase}
              onChange={handleInputChange}
              className="w-full min-h-[80px] px-3 py-2 border border-input bg-background rounded-md text-sm"
              placeholder="What patient intake workflows would you like to automate?"
              required
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting} className="flex-1">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Get a walkthrough'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}