'use client';
import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa6';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const formSchema = z
  .object({
    email: z.string().email('Please enter a valid email address').optional(),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .optional(),
    confirmPassword: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.password && data.confirmPassword) {
        return data.password === data.confirmPassword;
      }
      return true;
    },
    {
      message: "Passwords don't match",
      path: ['confirmPassword'],
    },
  );

type FormData = z.infer<typeof formSchema>;

export default function SignUpSection() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    },
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
    window.location.href = '/otp';
  };

  return (
    <>
      <div className="space-y-1">
        <h1 className="text-card-foreground text-xl font-semibold">
          Create your account
        </h1>
        <p className="text-xs">Sign up to get started with LaunchHPC</p>
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

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      className="!bg-background/20 h-10 placeholder:opacity-40"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="!bg-background/20 h-10 pe-10 placeholder:opacity-40"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
                      >
                        {showPassword ? (
                          <EyeClosed className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="Confirm Password"
                        className="!bg-background/20 h-10 pe-10 placeholder:opacity-40"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="text-muted-foreground hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeClosed className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="secondary"
              className="bg-secondary/20 hover:bg-secondary/30 text-chart-1 mt-1 h-10 w-full text-base"
            >
              Create account
            </Button>
          </form>
        </Form>
      </div>
      <div className="mt-6 text-xs">
        <span className="">Already have an account? </span>
        <a href="/signin" className="text-chart-1 font-bold hover:underline">
          Sign in
        </a>
      </div>
    </>
  );
}
