"use client";

import { sendMail } from "@/actions/sendMail";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormSchema } from "@/schemas/ContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("ContactPage");

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    startTransition(() => {
      sendMail(values).then((data) => {
        if (data?.error) {
          form.reset();
          toast.error(data.error);
        }
        if (data?.success) {
          form.reset();
          toast.success(data.success);
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg"
        onSubmit={form.handleSubmit(onSubmit)}
        aria-label={t("form.title") || "Contact Form"}
        noValidate
      >
        {/* Name and Surname */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">{t("form.name")}</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  placeholder={t("form.name")}
                  {...field}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.name}
                />
              </FormControl>
              <FormMessage className="text-destructive" role="alert" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="surname"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="surname">{t("form.Surname")}</FormLabel>
              <FormControl>
                <Input
                  id="surname"
                  placeholder={t("form.Surname")}
                  {...field}
                  aria-required="true"
                  aria-invalid={!!form.formState.errors.surname}
                />
              </FormControl>
              <FormMessage className="text-destructive" role="alert" />
            </FormItem>
          )}
        />

        {/* Email */}
        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">{t("form.Email")}</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    {...field}
                    aria-required="true"
                    aria-invalid={!!form.formState.errors.email}
                  />
                </FormControl>
                <FormMessage className="text-destructive" role="alert" />
              </FormItem>
            )}
          />
        </div>

        {/* Subject (spanning across 2 columns) */}
        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="subject">{t("form.Subject")}</FormLabel>
                <FormControl>
                  <Select
                    value={field.value || ""}
                    onValueChange={field.onChange}
                    name="subject"
                  >
                    <SelectTrigger
                      id="subject"
                      aria-required="true"
                      aria-invalid={!!form.formState.errors.subject}
                    >
                      <SelectValue placeholder={t("form.SelectSubject")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>{t("form.Subject")}</SelectLabel>
                        <SelectItem value="Web Design">
                          {t("form.WebDesign")}
                        </SelectItem>
                        <SelectItem value="Bug Fix">
                          {t("form.BugFix")}
                        </SelectItem>
                        <SelectItem value="SEO Optimization">
                          {t("form.SeoOptimization")}
                        </SelectItem>
                        <SelectItem value="Other">{t("form.Other")}</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-destructive" role="alert" />
              </FormItem>
            )}
          />
        </div>

        {/* Message (spanning across 2 columns) */}
        <div className="sm:col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">{t("form.Message")}</FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    className="max-h-52 min-h-40 custom-scrollbar"
                    maxLength={1024}
                    placeholder={t("form.YourMessage")}
                    {...field}
                    aria-required="true"
                    aria-invalid={!!form.formState.errors.message}
                  />
                </FormControl>
                <FormMessage className="text-destructive" role="alert" />
              </FormItem>
            )}
          />
        </div>

        {/* Submit button (spanning across 2 columns) */}
        <div className="sm:col-span-2">
          <Button
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center items-center gap-3"
            aria-busy={isPending}
          >
            {isPending && (
              <motion.span
                initial={{ scale: 0.7 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.4,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
                className="w-5 h-5 rounded-full bg-primary invert shadow-custom shadow-primary"
                aria-hidden="true"
                role="progressbar"
              ></motion.span>
            )}
            {t("form.Submit")}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
