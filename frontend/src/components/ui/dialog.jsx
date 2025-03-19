import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Dialog = (props) => (
  <DialogPrimitive.Root data-slot="dialog" {...props} />
);

export const DialogTrigger = (props) => (
  <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
);

export const DialogPortal = (props) => (
  <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
);

export const DialogClose = (props) => (
  <DialogPrimitive.Close data-slot="dialog-close" {...props} />
);

export const DialogOverlay = ({ className, ...props }) => (
  <DialogPrimitive.Overlay
    data-slot="dialog-overlay"
    className={cn(
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
      className
    )}
    {...props}
  />
);

export const DialogContent = ({ className, children, ...props }) => (
  <DialogPortal data-slot="dialog-portal">
    <DialogOverlay />
    <DialogPrimitive.Content
      data-slot="dialog-content"
      className={cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full !bg-white !text-black opacity-70 transition-opacity hover:opacity-100 focus:!outline-none">
  <XIcon className="w-4 h-4" />
  <span className="sr-only">Close</span>
</DialogPrimitive.Close>

    </DialogPrimitive.Content>
  </DialogPortal>
);

export const DialogHeader = ({ className, ...props }) => (
  <div
    data-slot="dialog-header"
    className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
    {...props}
  />
);

export const DialogFooter = ({ className, ...props }) => (
  <div
    data-slot="dialog-footer"
    className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
    {...props}
  />
);

export const DialogTitle = ({ className, ...props }) => (
  <DialogPrimitive.Title
    data-slot="dialog-title"
    className={cn("text-lg leading-none font-semibold", className)}
    {...props}
  />
);

export const DialogDescription = ({ className, ...props }) => (
  <DialogPrimitive.Description
    data-slot="dialog-description"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);
