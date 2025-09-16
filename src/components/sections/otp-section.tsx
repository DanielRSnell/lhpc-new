'use client';
import { useState } from 'react';

import { ChevronLeft, Copy } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa6';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Separator } from '@/components/ui/separator';

export default function OtpSection() {
  const [value, setValue] = useState('');

  const handlePasteCode = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const digits = text.replace(/\D/g, '').slice(0, 6);
      setValue(digits);
    } catch (err) {
      toast.error('Failed to read clipboard');
      console.error('Failed to read clipboard:', err);
    }
  };

  return (
    <>
      {/* Back button */}
      <a
        href="/signin"
        className="text-muted-foreground bg-muted group flex size-6 items-center justify-center rounded-sm"
      >
        <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.25" />
      </a>

      <div className="mt-6 space-y-1">
        <h1 className="text-card-foreground text-xl font-semibold">
          Enter code
        </h1>
        <p className="text-xs">
          Please enter the 6 digit code we sent to samuellasisi1st@gmail.com.
        </p>
      </div>

      <div className="mt-6 space-y-6">
        <Button
          variant="muted"
          className="text-muted-foreground flex h-10 w-full items-center justify-center gap-3 text-base"
        >
          <FaGoogle className="size-4.5" />
          Continue with Google
        </Button>

        <Separator className="bg-input" />

        {/* OTP Input */}
        <InputOTP
          maxLength={6}
          value={value}
          onChange={(value: string) => setValue(value)}
          containerClassName="w-full max-w-xs mb-4"
        >
          <InputOTPGroup className="w-full justify-between gap-2">
            {[...Array(6)].map((_, idx) => (
              <InputOTPSlot
                key={idx}
                index={idx}
                className="!bg-background/20 border-input size-10 shrink-0 rounded-md border font-medium"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        {/* Paste Code Button */}
        <Button
          onClick={handlePasteCode}
          variant="secondary"
          className="bg-secondary/20 hover:bg-secondary/30 text-chart-1"
          size="sm"
        >
          <Copy className="size-4" />
          Paste code
        </Button>
      </div>
    </>
  );
}
