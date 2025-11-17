// Terminal workflow script for amalgamy.ai - Interactive CLI-style qualification form
const terminal = {
    currentGroup: 0,
    currentFieldIndex: 0,
    data: {},

    // Group boundaries for terminal clearing
    groupBoundaries: [4, 7, 12], // Clear after fields 4, 7, and complete at 12

    // Webhook endpoint for data submission
    webhookUrl: 'https://api.umbral.ai/webhook/sc25',

    // All fields in sequence - grouped logically but asked one at a time
    fields: [
        // Group 1: Essential Contact Information (fields 0-3)
        {
            key: 'email',
            prompt: '> Initializing qualification protocol...\n> Enter your email address to begin node activation:',
            type: 'email',
            validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
            errorMsg: '[ ERROR ] Invalid email format. Please try again.',
            group: 0
        },
        {
            key: 'phone',
            prompt: '> Email verified. Establishing secure communication channel...\n> Enter your mobile number (optional, press Enter to skip):',
            type: 'tel',
            validation: () => true,
            errorMsg: '',
            group: 0
        },
        {
            key: 'name',
            prompt: '> Communication channel established. Collecting contact information...\n> Enter your full name:',
            type: 'text',
            validation: (value) => value.length > 0,
            errorMsg: '[ ERROR ] Name is required. Please try again.',
            group: 0
        },
        {
            key: 'organization',
            prompt: '> Contact verified. Configuring organizational parameters...\n> Enter your organization name:',
            type: 'text',
            validation: (value) => value.length > 0,
            errorMsg: '[ ERROR ] Organization name is required. Please try again.',
            group: 0
        },

        // Group 2: Organization & Context (fields 4-6)
        {
            key: 'orgType',
            prompt: '> Organization registered. Analyzing entity classification...\n> Select your organization type:\n  [1] Sovereign\n  [2] Neocloud\n  [3] Commercial\n  [4] Research Institution\n  [5] National Lab\n  [6] Enterprise\n  [7] Startup\n  [8] Government\n  [9] Academic\n  [10] Non-profit\n> Enter number [1-10]:',
            type: 'select',
            options: [
                'Sovereign',
                'Neocloud',
                'Commercial',
                'Research Institution',
                'National Lab',
                'Enterprise',
                'Startup',
                'Government',
                'Academic',
                'Non-profit'
            ],
            validation: (value) => /^([1-9]|10)$/.test(value),
            errorMsg: '[ ERROR ] Invalid selection. Please enter a number between 1-10.',
            transform: (value) => {
                const options = [
                    'Sovereign', 'Neocloud', 'Commercial', 'Research Institution',
                    'National Lab', 'Enterprise', 'Startup', 'Government',
                    'Academic', 'Non-profit'
                ];
                return options[parseInt(value) - 1];
            },
            group: 1
        },
        {
            key: 'location',
            prompt: '> Entity classified. Determining geographical parameters...\n> Enter your location (City, State/Country):',
            type: 'text',
            validation: (value) => value.length > 0,
            errorMsg: '[ ERROR ] Location is required. Please try again.',
            group: 1
        },
        {
            key: 'budget',
            prompt: '> Location confirmed. Assessing financial readiness...\n> Do you have $25,000 or more in discretionary funding/budget allocated for this project?\n  [1] Yes\n  [2] No\n> Enter number [1-2]:',
            type: 'select',
            options: ['Yes', 'No'],
            validation: (value) => /^[1-2]$/.test(value),
            errorMsg: '[ ERROR ] Invalid selection. Please enter 1 for Yes or 2 for No.',
            transform: (value) => value === '1' ? 'Yes' : 'No',
            group: 1
        },

        // Group 3: Technical Requirements (fields 7-11)
        {
            key: 'problem',
            prompt: '> Budget qualification complete. Capturing use case requirements...\n> Describe the problem you are solving:',
            type: 'text',
            validation: (value) => value.length > 0,
            errorMsg: '[ ERROR ] Problem description is required. Please try again.',
            group: 2
        },
        {
            key: 'currentSolution',
            prompt: '> Problem scope identified. Analyzing current state...\n> What are you doing now to solve this problem?',
            type: 'text',
            validation: (value) => value.length > 0,
            errorMsg: '[ ERROR ] Current solution description is required. Please try again.',
            group: 2
        },
        {
            key: 'computeLocation',
            prompt: '> Current solution documented. Assessing infrastructure deployment...\n> Where is the compute you are using now?\n  [1] Cloud\n  [2] On-Premises\n  [3] Hybrid\n  [4] None/Getting Started\n> Enter number [1-4]:',
            type: 'select',
            options: ['Cloud', 'On-Premises', 'Hybrid', 'None/Getting Started'],
            validation: (value) => /^[1-4]$/.test(value),
            errorMsg: '[ ERROR ] Invalid selection. Please enter a number between 1-4.',
            transform: (value) => {
                const options = ['Cloud', 'On-Premises', 'Hybrid', 'None/Getting Started'];
                return options[parseInt(value) - 1];
            },
            group: 2
        },
        {
            key: 'computeAmount',
            prompt: '> Infrastructure location identified. Quantifying resource allocation...\n> How much/type of compute are you using? (e.g., 10x H100 GPUs, 500 CPU cores)\n> Press Enter to skip if not applicable:',
            type: 'text',
            validation: () => true,
            errorMsg: '',
            group: 2
        },
        {
            key: 'urgency',
            prompt: '> Resource profile captured. Determining timeline requirements...\n> How urgent is the work you are doing?\n  [1] Immediate (0-30 days)\n  [2] Short-term (1-3 months)\n  [3] Medium-term (3-6 months)\n  [4] Long-term (6+ months)\n> Enter number [1-4]:',
            type: 'select',
            options: [
                'Immediate (0-30 days)',
                'Short-term (1-3 months)',
                'Medium-term (3-6 months)',
                'Long-term (6+ months)'
            ],
            validation: (value) => /^[1-4]$/.test(value),
            errorMsg: '[ ERROR ] Invalid selection. Please enter a number between 1-4.',
            transform: (value) => {
                const options = [
                    'Immediate (0-30 days)',
                    'Short-term (1-3 months)',
                    'Medium-term (3-6 months)',
                    'Long-term (6+ months)'
                ];
                return options[parseInt(value) - 1];
            },
            group: 2
        }
    ],

    init() {
        this.outputEl = document.getElementById('terminal-output');
        this.inputEl = document.getElementById('terminal-input');
        this.inputWrapperEl = document.getElementById('terminal-input-wrapper');

        this.inputEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleInput(this.inputEl.value.trim());
            }
        });

        // Start the workflow
        this.showPrompt();
    },

    scrollToInput() {
        // Smooth scroll to input wrapper
        this.inputWrapperEl.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    },

    sendStepData(step) {
        // Prepare payload with current data and step number
        const payload = {
            ...this.data,
            step: step
        };

        // Send data to webhook (fire and forget)
        fetch(this.webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).catch(error => {
            // Silently fail - don't interrupt user experience
            console.error('Webhook error:', error);
        });
    },

    updateInputAttributes(field) {
        // Set appropriate input attributes based on field type for better mobile UX and accessibility
        const inputModeMap = {
            'email': { type: 'email', inputmode: 'email', autocomplete: 'email' },
            'tel': { type: 'tel', inputmode: 'tel', autocomplete: 'tel' },
            'text': { type: 'text', inputmode: 'text', autocomplete: 'off' }
        };

        // Default attributes
        let attrs = { type: 'text', inputmode: 'text', autocomplete: 'off' };

        // Set attributes based on field key and type
        if (field.type === 'email') {
            attrs = inputModeMap.email;
        } else if (field.type === 'tel') {
            attrs = inputModeMap.tel;
        } else if (field.type === 'select') {
            // Numeric keyboard for selection fields
            attrs = { type: 'text', inputmode: 'numeric', autocomplete: 'off' };
        } else {
            // Text fields with specific autocomplete hints
            switch (field.key) {
                case 'name':
                    attrs = { type: 'text', inputmode: 'text', autocomplete: 'name' };
                    break;
                case 'organization':
                    attrs = { type: 'text', inputmode: 'text', autocomplete: 'organization' };
                    break;
                case 'location':
                    attrs = { type: 'text', inputmode: 'text', autocomplete: 'address-level2' };
                    break;
                default:
                    attrs = { type: 'text', inputmode: 'text', autocomplete: 'off' };
            }
        }

        // Apply attributes to input element
        this.inputEl.setAttribute('type', attrs.type);
        this.inputEl.setAttribute('inputmode', attrs.inputmode);
        this.inputEl.setAttribute('autocomplete', attrs.autocomplete);
    },

    typeText(text, callback, speed = 10) {
        let i = 0;
        const container = document.createElement('div');
        container.className = 'text-[color:var(--color-comment)] mb-2 whitespace-pre-wrap';
        this.outputEl.appendChild(container);

        const interval = setInterval(() => {
            if (i < text.length) {
                container.textContent += text.charAt(i);
                i++;

                // Scroll on every newline character to follow each line
                if (text.charAt(i - 1) === '\n') {
                    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            } else {
                clearInterval(interval);
                // Final scroll when done
                this.scrollToInput();
                if (callback) callback();
            }
        }, speed);
    },

    showPrompt() {
        const field = this.fields[this.currentFieldIndex];
        this.updateInputAttributes(field);
        this.typeText(field.prompt + '\n', () => {
            this.inputEl.disabled = false;
            this.inputEl.focus();
            this.inputEl.select();
            this.scrollToInput();
        });
    },

    handleInput(value) {
        const field = this.fields[this.currentFieldIndex];

        // Disable input while processing
        this.inputEl.disabled = true;

        // Echo the input
        const inputLine = document.createElement('div');
        inputLine.className = 'text-[color:var(--color-success)] mb-2';
        inputLine.textContent = `$ ${value}`;
        this.outputEl.appendChild(inputLine);

        // Clear input field
        this.inputEl.value = '';

        // Validate input
        if (!field.validation(value)) {
            if (field.errorMsg) {
                const errorLine = document.createElement('div');
                errorLine.className = 'text-[color:var(--color-debugger)] mb-4';
                errorLine.textContent = field.errorMsg;
                this.outputEl.appendChild(errorLine);
            }
            this.inputEl.disabled = false;
            this.inputEl.focus();
            this.inputEl.select();
            this.scrollToInput();
            return;
        }

        // Transform value if needed (for select fields)
        const finalValue = field.transform ? field.transform(value) : value;

        // Store the data
        this.data[field.key] = finalValue;

        // Move to next field or complete
        this.currentFieldIndex++;

        // Check if we've reached a group boundary
        if (this.groupBoundaries.includes(this.currentFieldIndex)) {
            // Send step data to webhook
            const stepNumber = this.groupBoundaries.indexOf(this.currentFieldIndex) + 1;
            this.sendStepData(stepNumber);

            if (this.currentFieldIndex < this.fields.length) {
                // Clear terminal and start next group
                this.clearTerminal(() => {
                    this.currentGroup++;
                    setTimeout(() => this.showPrompt(), 300);
                });
            } else {
                // All fields complete
                this.complete();
            }
        } else if (this.currentFieldIndex < this.fields.length) {
            // Continue with next field in same group
            setTimeout(() => this.showPrompt(), 500);
        } else {
            // All fields complete
            this.complete();
        }
    },

    clearTerminal(callback) {
        // Smooth fade out with height preservation to prevent jarring jump
        this.typeText('\n> Processing input...\n> Clearing terminal...\n', () => {
            // Capture current height before clearing
            const currentHeight = this.outputEl.scrollHeight;

            // Fade out existing content
            this.outputEl.style.transition = 'opacity 400ms ease-out';
            this.outputEl.style.opacity = '0';

            setTimeout(() => {
                // Clear content
                this.outputEl.innerHTML = '';

                // Maintain height temporarily to prevent scroll jump
                this.outputEl.style.minHeight = currentHeight + 'px';
                this.outputEl.style.opacity = '1';

                // Collapse height smoothly while new content loads
                setTimeout(() => {
                    this.outputEl.style.transition = 'min-height 300ms ease-out';
                    this.outputEl.style.minHeight = '0px';

                    // Clean up after transition and execute callback
                    setTimeout(() => {
                        this.outputEl.style.removeProperty('min-height');
                        this.outputEl.style.removeProperty('transition');
                        if (callback) callback();
                    }, 300);
                }, 50);
            }, 400);
        }, 5);
    },

    complete() {
        // Hide input
        this.inputWrapperEl.style.display = 'none';

        // Clear terminal before showing submission sequence
        this.clearTerminal(() => {
            // Show completion sequence
            this.typeText('\n> All parameters configured. Submitting application...\n', () => {
                setTimeout(() => this.processSubmission(), 1000);
            });
        });
    },

    processSubmission() {
        const steps = [
            'Transmitting application data to ThisWay Global agents...',
            'Analyzing qualification criteria...',
            'Reviewing organization profile...',
            'Validating budget alignment...',
            'Confirming technical requirements...',
            'Processing complete. Application submitted successfully.'
        ];

        let currentStep = 0;

        const processNext = () => {
            if (currentStep < steps.length) {
                const step = steps[currentStep];
                const stepLine = document.createElement('div');
                stepLine.className = 'text-[color:var(--color-string)] mb-1';
                stepLine.textContent = `> ${step}`;
                this.outputEl.appendChild(stepLine);
                // Smooth scroll during processing
                stepLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

                currentStep++;
                setTimeout(processNext, 400 + Math.random() * 200);
            } else {
                setTimeout(() => this.finalizeSetup(), 500);
            }
        };

        processNext();
    },

    finalizeSetup() {
        // Build calendar link with URL parameters
        const calendarParams = new URLSearchParams({
            name: this.data.name,
            email: this.data.email,
            a1: this.data.organization, // organization
            a2: this.data.orgType, // organization type
            a3: this.data.location, // location
            a4: this.data.budget, // budget
            a5: this.data.problem, // problem
            a6: this.data.currentSolution, // current solution
            a7: this.data.computeLocation, // compute location
            a8: this.data.computeAmount || 'Not specified', // compute amount
            a9: this.data.urgency // urgency
        });

        if (this.data.phone) {
            calendarParams.set('phone', this.data.phone);
        }

        const calendarLink = `https://cal.com/team/thisway/launch-hpc?${calendarParams.toString()}`;

        // Clear terminal before showing final summary
        this.clearTerminal(() => {
            this.typeText(
                '\n[ APPLICATION COMPLETE ]\n\n' +
                '> Qualification complete.\n' +
                '> Application submitted successfully.\n\n' +
                '> Application Summary:\n' +
                `  Name:          ${this.data.name}\n` +
                `  Email:         ${this.data.email}\n` +
                `  Phone:         ${this.data.phone || 'Not provided'}\n` +
                `  Organization:  ${this.data.organization}\n` +
                `  Type:          ${this.data.orgType}\n` +
                `  Location:      ${this.data.location}\n` +
                `  Budget Ready:  ${this.data.budget}\n` +
                `  Problem:       ${this.data.problem}\n` +
                `  Current:       ${this.data.currentSolution}\n` +
                `  Compute Loc:   ${this.data.computeLocation}\n` +
                `  Compute Amt:   ${this.data.computeAmount || 'Not specified'}\n` +
                `  Urgency:       ${this.data.urgency}\n\n` +
                `> Confirmation will be sent to ${this.data.email}\n` +
                '> Our team will review your application within 24-48 hours.\n' +
                '> Qualified applicants will receive access credentials and onboarding instructions.\n\n' +
                '[ NEXT STEPS ]\n\n' +
                'Thank you for your interest in amalgamy.ai.\n' +
                'First 25 qualified respondents get 25 days of access to prove 25%+ utilization improvement.\n\n' +
                '> Learn more: https://amalgamy.ai\n',
                () => {
                    // Add calendar booking button after text completes
                    setTimeout(() => {
                        const buttonContainer = document.createElement('div');
                        buttonContainer.className = 'mt-4 mb-2';

                        const calendarButton = document.createElement('a');
                        calendarButton.href = calendarLink;
                        calendarButton.target = '_blank';
                        calendarButton.rel = 'noopener noreferrer';
                        calendarButton.className = 'inline-block bg-[#FF1A75] hover:bg-[#fa23a7] text-white font-[Fira_Sans,sans-serif] font-medium px-6 py-3 rounded-lg transition-colors duration-200 no-underline';
                        calendarButton.textContent = 'Schedule Time With Our Team';

                        buttonContainer.appendChild(calendarButton);
                        this.outputEl.appendChild(buttonContainer);

                        // Scroll to show the button
                        buttonContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }, 200);
                },
                20
            );
        });
    }
};

// Initialize terminal when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    terminal.init();
});
