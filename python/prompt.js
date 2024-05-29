const fs = require('fs');

const prompt = fs.readFileSync('prompt.md', 'utf8');

module.exports = async function ({ vars }) {
  const mergedPrompt = prompt.replace('{{solution}}', fs.readFileSync(vars.solutionFile, 'utf8'));
  return [
    {
      role: 'user',
      content: mergedPrompt
    },
  ];
};