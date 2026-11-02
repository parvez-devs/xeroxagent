import { defineAgent } from "eve";

export default defineAgent({
  "model": "deepseek/deepseek-v3.2-thinking",
  "reasoning": "medium",
  "compaction": {
    "threshold": 0.7
  }
});
