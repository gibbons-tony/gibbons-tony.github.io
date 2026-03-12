#!/usr/bin/env node

/**
 * Generate Images from Saved Prompts
 * Run this when you have API keys available
 */

import { VisualistCore } from '@ember-agentic-labs/visualist-core';
import prompts from './portfolio-prompts.json' assert { type: 'json' };
import fs from 'fs/promises';
import path from 'path';

async function generateImages() {
  const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    console.log('❌ Please set GEMINI_API_KEY or GOOGLE_API_KEY');
    process.exit(1);
  }

  const visualist = new VisualistCore({ apiKey });

  for (const prompt of prompts) {
    console.log(`Generating: ${prompt.name}`);

    const result = await visualist.generateImage(prompt.prompt, {
      aspectRatio: '3:2'
    });

    if (result.success) {
      // Save image
      const imagePath = `../img/${prompt.category}/${prompt.name}.png`;
      await fs.writeFile(imagePath, result.images[0].data);
      console.log(`   ✅ Saved to ${imagePath}`);
    }
  }
}

generateImages().catch(console.error);
