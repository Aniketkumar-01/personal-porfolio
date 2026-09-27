/**
 * Aniket Kumar – Portfolio Engine
 * Minimalist Design Engineering Architecture
 * Inspired by chanhdai.com, ratneshc.com, ramx.in
 */

document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------------------------
    // 1. Theme Engine (Light / Dark Mode with Persistence & Shortcut)
    // --------------------------------------------------------------------------
    const htmlEl = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');

    function getPreferredTheme() {
        const stored = localStorage.getItem('portfolio-theme');
        if (stored === 'dark' || stored === 'light') {
            return stored;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function applyTheme(theme, notify = false) {
        htmlEl.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
        if (notify) {
            showToast(`Theme switched to ${theme === 'dark' ? 'Dark' : 'Light'} Mode`);
        }
    }

    // Toggle theme handler
    function toggleTheme(notify = true) {
        const currentTheme = htmlEl.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme, notify);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => toggleTheme(true));
    }

    // Listen for OS system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('portfolio-theme')) {
            applyTheme(e.matches ? 'dark' : 'light', false);
        }
    });

    // --------------------------------------------------------------------------
    // 2. Real-time Indian Standard Time (IST) Clock for Ranchi
    // --------------------------------------------------------------------------
    const clockEl = document.getElementById('live-clock');

    function updateLiveClock() {
        if (!clockEl) return;
        try {
            const now = new Date();
            const timeString = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            }).format(now);
            clockEl.textContent = timeString;
        } catch (err) {
            // Fallback to UTC offset calculation if Intl timezone fails
            const d = new Date();
            const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            const istDate = new Date(utc + (3600000 * 5.5));
            clockEl.textContent = istDate.toLocaleTimeString();
        }
    }

    updateLiveClock();
    setInterval(updateLiveClock, 1000);

    // --------------------------------------------------------------------------
    // 3. Dynamic Footer Year
    // --------------------------------------------------------------------------
    const yearEl = document.getElementById('current-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // --------------------------------------------------------------------------
    // 4. Toast Notification System
    // --------------------------------------------------------------------------
    const toastEl = document.getElementById('craft-toast');
    const toastMsgEl = document.getElementById('toast-message');
    let toastTimeout = null;

    function showToast(message, duration = 2500) {
        if (!toastEl || !toastMsgEl) return;
        toastMsgEl.textContent = message;
        toastEl.classList.add('is-visible');

        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('is-visible');
        }, duration);
    }

    // --------------------------------------------------------------------------
    // 5. Copy Email Action with Visual Feedback
    // --------------------------------------------------------------------------
    const emailToCopy = (typeof portfolioData !== 'undefined' && portfolioData.personalInfo && portfolioData.personalInfo.email) 
        ? portfolioData.personalInfo.email 
        : 'aniketkr2101@gmail.com';

    function copyEmailToClipboard(triggerBtn) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(emailToCopy).then(() => {
                handleCopySuccess(triggerBtn);
            }).catch(() => {
                fallbackCopy(emailToCopy, triggerBtn);
            });
        } else {
            fallbackCopy(emailToCopy, triggerBtn);
        }
    }

    function fallbackCopy(text, triggerBtn) {
        const tempInput = document.createElement('textarea');
        tempInput.value = text;
        tempInput.style.position = 'fixed';
        tempInput.style.opacity = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        try {
            document.execCommand('copy');
            handleCopySuccess(triggerBtn);
        } catch (e) {
            showToast('Unable to copy to clipboard.');
        }
        document.body.removeChild(tempInput);
    }

    function handleCopySuccess(triggerBtn) {
        showToast(`Copied ${emailToCopy} to clipboard!`);
        if (triggerBtn) {
            const labelEl = triggerBtn.querySelector('.copy-label');
            if (labelEl) {
                const originalText = labelEl.textContent;
                labelEl.textContent = 'Copied!';
                setTimeout(() => {
                    labelEl.textContent = originalText;
                }, 2000);
            }
        }
    }

    const heroCopyBtn = document.getElementById('copy-email-btn');
    if (heroCopyBtn) {
        heroCopyBtn.addEventListener('click', () => copyEmailToClipboard(heroCopyBtn));
    }

    const bottomCopyBtn = document.getElementById('copy-email-bottom-btn');
    if (bottomCopyBtn) {
        bottomCopyBtn.addEventListener('click', () => copyEmailToClipboard(bottomCopyBtn));
    }

    // --------------------------------------------------------------------------
    // 6. Command Palette Modal (Cmd+K / Ctrl+K)
    // --------------------------------------------------------------------------
    const commandModal = document.getElementById('command-modal');
    const openCommandBtn = document.getElementById('open-command-palette');
    const closeCommandBtn = document.getElementById('close-command-palette');
    const cmdSearchInput = document.getElementById('cmd-search-input');
    const cmdResultsContainer = document.getElementById('cmd-results');

    let allCmdItems = [];
    if (cmdResultsContainer) {
        allCmdItems = Array.from(cmdResultsContainer.querySelectorAll('.cmd-item'));
    }

    function openCommandPalette() {
        if (!commandModal) return;
        commandModal.classList.add('is-open');
        commandModal.setAttribute('aria-hidden', 'false');
        if (cmdSearchInput) {
            cmdSearchInput.value = '';
            filterCmdItems('');
            setTimeout(() => cmdSearchInput.focus(), 50);
        }
    }

    function closeCommandPalette() {
        if (!commandModal) return;
        commandModal.classList.remove('is-open');
        commandModal.setAttribute('aria-hidden', 'true');
    }

    if (openCommandBtn) {
        openCommandBtn.addEventListener('click', openCommandPalette);
    }

    if (closeCommandBtn) {
        closeCommandBtn.addEventListener('click', closeCommandPalette);
    }

    // Click outside to close
    if (commandModal) {
        commandModal.addEventListener('click', (e) => {
            if (e.target === commandModal) {
                closeCommandPalette();
            }
        });
    }

    // Filter command items based on search query
    function filterCmdItems(query) {
        const cleanQuery = query.trim().toLowerCase();
        let visibleCount = 0;

        allCmdItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const action = item.getAttribute('data-action') || '';
            const target = item.getAttribute('data-target') || '';
            const isMatch = text.includes(cleanQuery) || action.includes(cleanQuery) || target.includes(cleanQuery);

            if (isMatch) {
                item.style.display = 'flex';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
            item.classList.remove('is-selected');
        });

        // Hide/show group headers if all child items in group are hidden
        if (cmdResultsContainer) {
            const groupLabels = cmdResultsContainer.querySelectorAll('.cmd-group-label');
            groupLabels.forEach(label => {
                let nextEl = label.nextElementSibling;
                let hasVisibleSibling = false;
                while (nextEl && !nextEl.classList.contains('cmd-group-label')) {
                    if (nextEl.classList.contains('cmd-item') && nextEl.style.display !== 'none') {
                        hasVisibleSibling = true;
                        break;
                    }
                    nextEl = nextEl.nextElementSibling;
                }
                label.style.display = hasVisibleSibling ? 'block' : 'none';
            });
        }

        // Highlight first visible item
        const firstVisible = allCmdItems.find(item => item.style.display !== 'none');
        if (firstVisible) {
            firstVisible.classList.add('is-selected');
        }
    }

    if (cmdSearchInput) {
        cmdSearchInput.addEventListener('input', (e) => {
            filterCmdItems(e.target.value);
        });
    }

    // Execute Command Action
    function executeCmdItem(item) {
        if (!item) return;
        const action = item.getAttribute('data-action');
        const target = item.getAttribute('data-target');
        const url = item.getAttribute('data-url');

        closeCommandPalette();

        if (action === 'navigate' && target) {
            const targetSection = document.querySelector(target);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (action === 'copy-email') {
            copyEmailToClipboard(heroCopyBtn);
        } else if (action === 'toggle-theme') {
            toggleTheme(true);
        } else if (action === 'open-url' && url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    }

    // Click item in results list
    allCmdItems.forEach(item => {
        item.addEventListener('click', () => {
            executeCmdItem(item);
        });
    });

    // Keyboard navigation in modal & Global hotkeys
    window.addEventListener('keydown', (e) => {
        // Cmd+K or Ctrl+K to open
        if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            if (commandModal && commandModal.classList.contains('is-open')) {
                closeCommandPalette();
            } else {
                openCommandPalette();
            }
            return;
        }

        // Escape closes command modal
        if (e.key === 'Escape' && commandModal && commandModal.classList.contains('is-open')) {
            e.preventDefault();
            closeCommandPalette();
            return;
        }

        // 'T' to toggle theme when modal is closed and user isn't in an input/textarea
        if ((e.key === 't' || e.key === 'T') && !e.metaKey && !e.ctrlKey && !e.altKey) {
            const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
            const isEditing = activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable;
            if (!isEditing && (!commandModal || !commandModal.classList.contains('is-open'))) {
                e.preventDefault();
                toggleTheme(true);
                return;
            }
        }

        // When command modal is open: handle ArrowUp, ArrowDown, Enter
        if (commandModal && commandModal.classList.contains('is-open')) {
            const visibleItems = allCmdItems.filter(item => item.style.display !== 'none');
            if (visibleItems.length === 0) return;

            const currentIndex = visibleItems.findIndex(item => item.classList.contains('is-selected'));

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % visibleItems.length;
                visibleItems.forEach(i => i.classList.remove('is-selected'));
                visibleItems[nextIndex].classList.add('is-selected');
                visibleItems[nextIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
                visibleItems.forEach(i => i.classList.remove('is-selected'));
                visibleItems[prevIndex].classList.add('is-selected');
                visibleItems[prevIndex].scrollIntoView({ block: 'nearest' });
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (currentIndex >= 0) {
                    executeCmdItem(visibleItems[currentIndex]);
                } else if (visibleItems.length > 0) {
                    executeCmdItem(visibleItems[0]);
                }
            }
        }
    });

    // --------------------------------------------------------------------------
    // 7. Interactive Hover Craft Enhancements
    // --------------------------------------------------------------------------
    // Smooth scroll for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
