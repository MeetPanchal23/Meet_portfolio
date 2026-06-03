import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { personalInfo, skillCategories, experience, projects } from '../data';

const Terminal = () => {
  const [history, setHistory] = useState([
    { text: "Welcome to Meet Panchal's Shell v1.0.0", type: 'system' },
    { text: "Type 'help' to view the list of available commands.", type: 'system' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const command = inputValue.trim().toLowerCase();
      const newHistory = [...history, { text: `visitor@meet-panchal:~$ ${inputValue}`, type: 'input' }];

      if (command) {
        switch (command) {
          case 'help':
            newHistory.push({
              text: `Available commands:\n  about      - Who is Meet Panchal?\n  skills     - Technical skillset breakdown\n  experience - Professional internship history\n  projects   - Showcase of main works\n  contact    - Email, phone, location\n  resume     - Trigger printable resume export\n  clear      - Clear terminal console`,
              type: 'output'
            });
            break;
          case 'about':
            newHistory.push({ text: personalInfo.summary, type: 'output' });
            break;
          case 'skills':
            const skillsText = skillCategories.map(cat => 
              `[${cat.name}]\n` + cat.skills.map(s => `  • ${s.name} (${s.level}%)`).join('\n')
            ).join('\n\n');
            newHistory.push({ text: skillsText, type: 'output' });
            break;
          case 'experience':
            const expText = experience.map(job =>
              `• ${job.role} at ${job.company}\n  ${job.duration} | ${job.location}\n` +
              job.bullets.map(b => `    - ${b}`).join('\n')
            ).join('\n\n');
            newHistory.push({ text: expText, type: 'output' });
            break;
          case 'projects':
            const projText = projects.map(p =>
              `• ${p.title} [${p.category}]\n  ${p.description}\n  Tags: ${p.tags.join(', ')}`
            ).join('\n\n');
            newHistory.push({ text: projText, type: 'output' });
            break;
          case 'contact':
            newHistory.push({
              text: `Contact Info:\n  Email:    ${personalInfo.email}\n  Phone:    ${personalInfo.phone}\n  Location: ${personalInfo.location}`,
              type: 'output'
            });
            break;
          case 'resume':
            newHistory.push({ text: "Opening professional PDF resume in a new tab...", type: 'system' });
            setTimeout(() => {
              window.open(personalInfo.resumeUrl, '_blank');
            }, 500);
            break;
          case 'clear':
            setHistory([]);
            setInputValue('');
            return;
          default:
            newHistory.push({
              text: `bash: command not found: '${command}'. Type 'help' to see list of valid commands.`,
              type: 'error'
            });
        }
      }

      setHistory(newHistory);
      setInputValue('');
    }
  };

  return (
    <section id="terminal" className="terminal-section reveal">
      <div className="section-header">
        <h2 className="section-title">Developer Terminal</h2>
        <div className="title-bar"></div>
        <p className="section-subtitle">Interact directly with my qualifications via an emulated command shell.</p>
      </div>

      <div className="terminal-window glass-card" onClick={focusInput}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="term-dot term-close"></span>
            <span className="term-dot term-minimize"></span>
            <span className="term-dot term-expand"></span>
          </div>
          <div className="terminal-title">
            <TerminalIcon size={14} />
            <span>meet-panchal-shell.sh</span>
          </div>
          <div className="terminal-spacer"></div>
        </div>

        {/* Terminal Screen Container */}
        <div ref={terminalBodyRef} className="terminal-body">
          <div className="terminal-scanline"></div>
          
          <div className="terminal-history">
            {history.map((line, idx) => (
              <pre key={idx} className={`terminal-line line-${line.type}`}>
                {line.text}
              </pre>
            ))}
          </div>

          {/* Terminal Input Line */}
          <div className="terminal-input-row">
            <span className="terminal-prompt">visitor@meet-panchal:~$</span>
            <input
              ref={inputRef}
              type="text"
              className="terminal-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleCommand}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
