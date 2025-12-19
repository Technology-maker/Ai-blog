// src/components/Contact.jsx
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Footer from "./Footer";

/* ---------- Validation schema ---------- */
const schema = z.object({
    name: z.string().min(2, "Please enter at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(3, "Subject is too short"),
    message: z.string().min(10, "Message should be at least 10 characters"),
});

/* ---------- Animations ---------- */
const fadeUp = (reduceMotion) => ({
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
});



/* ---------- Main component ---------- */
export default function ContactPage() {
    const prefersReducedMotion = useReducedMotion();

    const [showSuccess, setShowSuccess] = React.useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(schema),
        mode: "onTouched",
    });



    const onSubmit = async (data) => {
        try {
            const res = await fetch("https://ai-blog-seven-beta.vercel.app/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Request failed");

            // ✅ show success message
            setShowSuccess(true);

            // ✅ reset form fields
            reset();

            // ✅ hide success message after 3 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 4000);
        } catch (error) {
            console.error(error);
        }
    };


    const variants = fadeUp(prefersReducedMotion);

    return (
        <section className="flex flex-col justify-center ">

            <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-16  relative overflow-hidden">

                {/* decorative background blobs */}
                <motion.div
                    aria-hidden
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="pointer-events-none absolute -top-40 -left-40 h-72 w-72 rounded-full blur-3xl bg-gradient-to-tr from-fuchsia-500/50 via-indigo-500/50 to-cyan-500/50"
                />
                <motion.div
                    aria-hidden
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.18, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.1 }}
                    className="pointer-events-none absolute -bottom-40 -right-40 h-72 w-72 rounded-full blur-3xl bg-gradient-to-tr from-emerald-500/50 via-sky-500/50 to-violet-500/50"
                />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div variants={variants} initial="hidden" animate="show" className="mx-auto max-w-2xl text-center">
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 backdrop-blur">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            We reply within 24 hours
                        </span>

                        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Get in touch</h1>
                        <p className="mt-3 text-slate-300">
                            Questions, collaborations, or project ideas — drop a message and let's build something great.
                        </p>
                    </motion.div>

                    <div className="mx-auto mt-10 grid max-w-5xl gap-8 md:grid-cols-2">
                        {/* Info card */}
                        <motion.aside
                            variants={variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl backdrop-blur"
                        >
                            <h2 className="text-lg font-medium text-white">Contact details</h2>
                            <ul className="mt-4 space-y-3 text-slate-300">
                                <li>
                                    Email:{" "}
                                    <a className="text-emerald-400 hover:underline" href="mailto:satenderyadav301019@gmail.com">
                                        satenderyadav301019@gmail.com
                                    </a>
                                </li>
                                <li>Location: Vill - Khijuriwas, Bhiwadi (Raj)</li>
                                <li>Available: Mon–Sat, 10:00–18:00 IST</li>
                            </ul>

                            <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

                            <div className="mt-6 flex flex-wrap gap-3">
                                <a
                                    href="https://www.instagram.com/yadav_sarkar1519?igsh=Z3hsMzY1NnFkaHhq" target="_blank"
                                    className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 group-hover:scale-110 transition" />
                                    Instagram
                                </a>

                                <a
                                    href="https://github.com/Technology-maker" target="_blank"
                                    className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400 group-hover:scale-110 transition" />
                                    GitHub
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/satender-yadav-a39b622a0/" target="_blank"
                                    className="group inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
                                >
                                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:scale-110 transition" />
                                    LinkedIn
                                </a>
                            </div>
                        </motion.aside>

                        {/* Form */}
                        <motion.form
                            onSubmit={handleSubmit(onSubmit)}
                            variants={variants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.2 }}
                            className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl backdrop-blur"
                        >
                            {showSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="absolute -top-4 left-1/2 z-10 w-[92%] -translate-x-1/2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300 shadow"
                                >
                                    Message sent successfully! 🎉
                                </motion.div>
                            )}
                            <div className="grid gap-4 md:grid-cols-2">
                                <Field label="Name" id="name" placeholder="Enter your name" error={errors.name?.message} register={register("name")} />
                                <Field
                                    label="Email"
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    error={errors.email?.message}
                                    register={register("email")}
                                />
                            </div>

                            <div className="mt-4">
                                <Field label="Subject" id="subject" placeholder="What's this about?" error={errors.subject?.message} register={register("subject")} />
                            </div>

                            <div className="mt-4">
                                <Field
                                    label="Message"
                                    id="message"
                                    placeholder="Tell us about your project or question…"
                                    textArea
                                    error={errors.message?.message || errors.message}
                                    register={register("message")}
                                />
                            </div>

                            <motion.button
                                whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
                                whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 px-4 py-3 text-sm font-medium text-white shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send message"}
                            </motion.button>

                            <p className="mt-6 text-center text-xs text-slate-400">This form is protected by our privacy policy. No spam, ever.</p>
                        </motion.form>
                    </div>


                </div>
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mb-3 text-center mt-8"
                >
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-4  text-sm text-slate-200 border-gray-700 border rounded-lg
                   backdrop-blur hover:bg-slate-800 hover:border-slate-700 bg-transparent
                   transition-all justify-center"
                    >
                        <span className="text-lg">←</span> Back to Home
                    </a>
                </motion.div>

                {/* footer  */}

                <Footer />

            </div>

        </section>
    );
}

/* ---------- Field sub-component (floating label + textarea support) ---------- */
function Field({ label, id, error, register, type = "text", textArea = false }) {
    return (
        <div className="group relative">
            {textArea ? (
                <textarea
                    id={id}
                    placeholder=" " /* important: single space for :placeholder-shown logic */
                    {...register}
                    className={`peer h-36 w-full resize-none rounded-xl border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder-transparent focus:border-emerald-400 focus:bg-slate-950/80 ${error ? "border-rose-500/60" : "border-slate-800"
                        }`}
                />
            ) : (
                <input
                    id={id}
                    type={type}
                    placeholder=" " /* important: single space for :placeholder-shown logic */
                    {...register}
                    className={`peer w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition placeholder-transparent focus:border-emerald-400 focus:bg-slate-950/80 ${error ? "border-rose-500/60" : "border-slate-800"
                        }`}
                />
            )}

            {/* label floats by default, and drops into the input only when it's empty */}
            <label
                htmlFor={id}
                className={`pointer-events-none absolute left-3 z-10 origin-left rounded px-1 text-sm transition-all top-[-0.6rem] peer-placeholder-shown:top-3 peer-placeholder-shown:text-slate-400 peer-focus:top-[-0.6rem] peer-focus:bg-slate-900 peer-focus:text-emerald-300`}
                style={{ backgroundColor: "rgba(15,23,42,0.6)" }}
            >
                {label}
            </label>

            {error && <div className="mt-1 text-xs text-rose-400">{error}</div>}
        </div>
    );
}

Field.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    register: PropTypes.any.isRequired,
    type: PropTypes.string,
    textArea: PropTypes.bool,
};
