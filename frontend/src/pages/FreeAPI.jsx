import React from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import API_IMG from '../assets/Ai-api-img/open-router-img.jpg'
import Gemini_img from '../assets/Aiimage/gemeni.png'

const features = [
    {
        title: 'Multiple Models',
        desc: 'Search and test DeepSeek, ChatGPT-style models, Gemini, Blackbox and more — pick free tiers and experiment.',
    },
    {
        title: 'No-cost sandbox',
        desc: 'Try API outputs safely before integrating — monitor responses and tweak prompts in real time.',
    },
    {
        title: 'Easy onboarding',
        desc: 'Sign up at OpenRouter.ai, grab your free keys, and start calling endpoints from your app.',
    },
]

const FreeAPI = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-col items-center justify-center px-6 py-12">

                {/* open router section */}
                <section className="w-full max-w-4xl mx-auto text-center my-6">

                    <img
                        src={API_IMG}
                        alt="Illustration: APIs and AI models flowing between services"
                        loading="lazy"
                        className="w-full h-auto rounded-2xl shadow-xl mb-8 border-2 border-slate-800 object-cover"
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Explore Powerful Free APIs</h1>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mx-auto max-w-2xl mb-6">
                        We collect free-tier AI APIs so you can experiment with different models before committing them to your project. Sign up at OpenRouter.ai and grab your free API key to test models like DeepSeek, Chat-style engines, Gemini, and Blackbox.
                        <br /><br />
                        You can quickly monitor outputs, compare responses, and understand how each model behaves in real-world use cases — perfect for rapid prototyping and learning.
                        <br /><br />
                        If you’re exploring Gemini specifically, it also offers free-tier access through Google’s AI Studio with limited usage, making it great for small experiments before scaling.
                        <br /><br />
                        For unified access to multiple models and simpler onboarding, OpenRouter remains the best sandbox to start with. prototyping.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                        <a href="https://openrouter.ai/signup" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-slate-900 text-white font-medium shadow hover:opacity-95 transition" >
                            Sign up on OpenRouter
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                        {features.map((f) => (
                            <article key={f.title} className="p-4 bg-white rounded-2xl shadow-sm border">
                                <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                                <p className="text-sm text-slate-600">{f.desc}</p>
                            </article>
                        ))}
                    </div>

                    <div className="prose prose-slate mx-auto max-w-2xl text-left">
                        <h2>🔑 How to get key?</h2>

                        <ol className="list-decimal pl-5 space-y-1">
                            <li>
                                Go to :-
                                <a href="https://openrouter.ai" target="_blank">https://openrouter.ai</a>
                            </li>

                            <li>Sign up → Go to Dashboard → Copy API key</li>

                            <li>Use any free model → Done</li>

                            <li>Use fetch or axios in your project to call the endpoint and inspect responses.</li>
                        </ol>

                        <p className="mt-4 text-sm text-slate-500">
                            Tip: keep a small test harness (a page or Postman collection) so you can iterate fast.
                        </p>
                    </div>


                </section>

                {/* chat gpt section  */}

                <section className="w-full max-w-4xl mx-auto text-center">

                    <img
                        src={Gemini_img}
                        alt="Illustration: APIs and AI models flowing between services"
                        loading="lazy"
                        className="w-full h-auto rounded-2xl shadow-xl mb-8 border-2 border-slate-800 object-cover"
                    />

                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Explore Powerful Free APIs</h1>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mx-auto max-w-2xl mb-6">
                        Google Gemini is available via Google Cloud’s Generative AI APIs. Google provides free credits and a limited free tier for new accounts, but quotas and rate limits apply — it's best for testing and small experiments.
                        <br /><br />
                        To try Gemini directly: sign up at <a href="https://aistudio.google.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline">Google Cloud Generative AI</a>, enable the API, create credentials, and follow the docs to call the endpoints.
                        <br /><br />
                        For a simpler sandbox and unified access to multiple models (including Gemini-backed endpoints where available), use OpenRouter’s free keys — sign up there to prototype quickly.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                        <a
                            href="https://aistudio.google.com/api-keys"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-3 rounded-full bg-slate-900 text-white font-medium shadow hover:opacity-95 transition"
                        >
                            Sign up on Gemini ai
                        </a>
                    </div>



                    <div className="prose prose-slate mx-auto max-w-2xl text-left">
                        <h2>🔑 How to get Gemini API Key?</h2>

                        <ol className="list-decimal pl-5 space-y-1">
                            <li>
                                Go to :-
                                <a href="https://aistudio.google.com" target="_blank">https://aistudio.google.com</a>
                            </li>

                            <li>Sign in with your Google account</li>

                            <li>Open the left sidebar → Click on <strong>API Keys</strong></li>

                            <li>Click <strong>Create API Key</strong> → Choose a project</li>

                            <li>Copy your API key (store it safely, don’t expose it in frontend)</li>

                            <li>Use fetch or axios in your project to call the Gemini API endpoint</li>

                            <li>Test your prompts inside AI Studio before integrating — saves time</li>
                        </ol>

                        <p className="mt-4 text-sm text-slate-500">
                            Tip: Always keep your API key in environment variables (.env) and never push it to GitHub.
                        </p>
                    </div>


                </section>
            </main>

            <Footer />
        </div>
    )
}

export default FreeAPI;
