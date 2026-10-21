# AI-Native Wiki Platform

<p align="center">
  <img src="https://img.shields.io/badge/status-In%20Development-blue" alt="Status">
  <img src="https://img.shields.io/badge/tech-Vanilla%20JS%20%2F%20HTML%2F%20CSS-orange" alt="Tech">
</p>

An open-source, AI-powered knowledge base built to replace traditional wikis. Designed for students, researchers, and creators to structure raw notes, research topics, and present knowledge effortlessly.

---

## Vision & Overview

This project was built to revolutionize how we interact with online wikis by pairing clean, modern UI templates with lightning-fast AI capabilities. By separating content processing from layout rendering using structured JSON outputs, the platform delivers high-speed AI summarization, research assistant features, and article creation with minimal API token usage.

---

## Key Features

* **Smart AI Editor** — Converts messy notes and raw text into clean, structured HTML articles complete with summary boxes and auto-generated Tables of Contents.
* **AI Research Assistant** — Scans complex topics, answers targeted questions, and highlights relevant article passages automatically.
* **Wikipedia Importer** — Imports Wikipedia articles (CC BY-SA 4.0 compliant), stripping unnecessary clutter for a uniform reading experience.
* **Presentation Export** — Export research notes and formatted summaries straight into slide-ready formats for PowerPoint or Google Slides.
* **BYOK (Bring Your Own Key)** — Native support for users to plug in their own free Google Gemini API key for unlimited AI usage with zero cost to the platform.
* **Token-Optimized Architecture** — Utilizes strict JSON-schema outputs to keep AI API costs down while maintaining 100% template design integrity.

---

## Tech Stack

* **Frontend:** HTML5, CSS3, Vanilla JavaScript (MVP & Prototyping Phase) ➔ *Migrating to Next.js & Tailwind CSS*.
* **AI Engine:** Google Gemini API (`gemini-2.0-flash` for ultra-low latency and fast structured responses).
* **Hosting Target:** Cloudflare Pages (for unlimited bandwidth and global edge performance).

---

## Quick Start (Local Setup)

The current phase is built with zero build steps or heavy dependencies—you can run it directly in your browser.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/your-wiki-repo.git
   ```
2. **Open the project:**
   Open the root directory in VS Code or your preferred editor.
3. **Set up your API Key:**
   Get a free API key from [Google AI Studio](https://aistudio.google.com/) and insert it into your configuration file.
4. **Launch:**
   Open `index.html` directly in any web browser or use VS Code's *Live Server* extension.


