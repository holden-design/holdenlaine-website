import { f as createComponent, r as renderTemplate, k as defineScriptVars, l as renderComponent, n as renderHead } from '../chunks/astro/server_CXTV551O.mjs';
import 'piccolore';
import { $ as $$SEO } from '../chunks/SEO_CDnf78ti.mjs';
import { $ as $$HamburgerMenu, a as $$Cursor } from '../chunks/HamburgerMenu_ycGF1s4J.mjs';
import { $ as $$Logo } from '../chunks/Logo_DiKPKTim.mjs';
import { t as translations } from '../chunks/translations_BrmIb2Kj.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-uw5kdbxl> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">', "", '</head> <body data-astro-cid-uw5kdbxl> <canvas id="letterfall-canvas" data-astro-cid-uw5kdbxl></canvas> ', " ", " ", ' <div class="container" data-astro-cid-uw5kdbxl> <div class="sidebar" data-astro-cid-uw5kdbxl> <nav data-astro-cid-uw5kdbxl> <a href="/" data-i18n="nav.home" data-astro-cid-uw5kdbxl>HOME</a> <a href="/studio" data-i18n="nav.studio" data-astro-cid-uw5kdbxl>STUDIO</a> <a href="/photos" data-i18n="nav.portraits" data-astro-cid-uw5kdbxl>PHOTOS</a> <a href="/projects" data-i18n="nav.projects" data-astro-cid-uw5kdbxl>PROJECTS</a> <a href="/prices" data-i18n="nav.prices" data-astro-cid-uw5kdbxl>PRICES</a> <a href="/shop" data-i18n="nav.tshirts" data-astro-cid-uw5kdbxl>SHOP</a> <a href="/gift-cards" data-astro-cid-uw5kdbxl>GIFT CARDS</a> <a href="/contact" data-i18n="nav.contact" data-astro-cid-uw5kdbxl>CONTACT</a> </nav> </div> <div class="main-content" data-astro-cid-uw5kdbxl> <h1 data-i18n="contact.heading" data-astro-cid-uw5kdbxl>Contact</h1> <!-- Gift Card Section at Top --> <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;" data-astro-cid-uw5kdbxl> <h2 style="margin-top: 0;" data-i18n="contact.giftCards" data-astro-cid-uw5kdbxl>Gift Cards</h2> <p data-i18n="contact.giftCardDescription" data-astro-cid-uw5kdbxl>Purchase a gift card for photography sessions and share the gift of professional photography with someone special.</p> <button class="giftcard-btn" id="buyGiftcardBtn" data-i18n="contact.buyGiftCard" data-astro-cid-uw5kdbxl>Buy a Gift Card</button> </div> <div class="content-wrapper" data-astro-cid-uw5kdbxl> <div class="contact-section" data-astro-cid-uw5kdbxl> <h2 data-i18n="contact.bookSession" data-astro-cid-uw5kdbxl>Book a Session</h2> <form class="booking-form" id="bookingForm" data-astro-cid-uw5kdbxl> <input type="hidden" name="access_key" value="dff7794e-dac3-4702-8fb9-bc764d21f727" data-astro-cid-uw5kdbxl> <input type="hidden" name="subject" value="New Booking Request from Holden Laine Photography" data-astro-cid-uw5kdbxl> <input type="hidden" name="from_name" value="Holden Laine Photography Contact Form" data-astro-cid-uw5kdbxl> <input type="hidden" name="replyto" id="replyto" value="" data-astro-cid-uw5kdbxl> <input type="hidden" name="cc" value="" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl><span data-i18n="contact.name" data-astro-cid-uw5kdbxl>Name</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="text" id="name" name="name" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl><span data-i18n="contact.email" data-astro-cid-uw5kdbxl>Email</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="email" id="email" name="email" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="phone" data-i18n="contact.phone" data-astro-cid-uw5kdbxl>Phone</label> <input type="tel" id="phone" name="phone" data-astro-cid-uw5kdbxl> </div> <div class="form-row" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="date" data-astro-cid-uw5kdbxl><span data-i18n="contact.preferredDate" data-astro-cid-uw5kdbxl>Preferred Date</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="text" id="date" name="date" required readonly data-placeholder-i18n="contact.selectFromCalendar" placeholder="Select from calendar" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="time" data-astro-cid-uw5kdbxl><span data-i18n="contact.preferredTime" data-astro-cid-uw5kdbxl>Preferred Time</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="text" id="time" name="time" required readonly data-placeholder-i18n="contact.selectDateFirst" placeholder="Select a date first" data-astro-cid-uw5kdbxl> </div> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="session-type" data-astro-cid-uw5kdbxl><span data-i18n="contact.sessionType" data-astro-cid-uw5kdbxl>Session Type</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <select id="session-type" name="session-type" required data-astro-cid-uw5kdbxl> <option value="" data-i18n="contact.selectSessionType" data-astro-cid-uw5kdbxl>Select a session type</option> <option value="portrait" data-i18n="contact.portraitSession" data-astro-cid-uw5kdbxl>Portrait Session</option> <option value="event" data-i18n="contact.eventPhotography" data-astro-cid-uw5kdbxl>Event Photography</option> <option value="commercial" data-i18n="contact.commercialProject" data-astro-cid-uw5kdbxl>Commercial Project</option> <option value="other" data-i18n="contact.other" data-astro-cid-uw5kdbxl>Other</option> </select> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="message" data-i18n="contact.message" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" data-placeholder-i18n="contact.messagePlaceholder" placeholder="Tell me about your project or any specific requirements..." data-astro-cid-uw5kdbxl></textarea> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="giftcard" data-i18n="contact.giftcardCode" data-astro-cid-uw5kdbxl>Gift Card Code (Optional)</label> <input type="text" id="giftcard" name="giftcard" data-placeholder-i18n="contact.giftcardCodePlaceholder" placeholder="Enter your gift card code if you have one" data-astro-cid-uw5kdbxl> </div> <button type="submit" class="submit-btn" data-i18n="contact.requestBooking" data-astro-cid-uw5kdbxl>Request Booking</button> <div class="form-message" id="formMessage" data-astro-cid-uw5kdbxl></div> </form> </div> <div class="contact-section" data-astro-cid-uw5kdbxl> <h2 data-i18n="contact.availabilityCalendar" data-astro-cid-uw5kdbxl>Availability Calendar</h2> <div id="calendar" data-astro-cid-uw5kdbxl></div> <div id="timeSlots" style="display: none;" data-astro-cid-uw5kdbxl> <div class="time-slots" data-astro-cid-uw5kdbxl> <h3 data-i18n="contact.availableTimes" data-astro-cid-uw5kdbxl>Available Times</h3> <div class="time-grid" id="timeGrid" data-astro-cid-uw5kdbxl></div> </div> </div> <!-- Contact Details Under Calendar --> <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #ddd;" data-astro-cid-uw5kdbxl> <h3 style="margin-top: 0;" data-astro-cid-uw5kdbxl>Direct Contact</h3> <p style="margin: 0.5rem 0;" data-astro-cid-uw5kdbxl> <a href="mailto:holdenlaine@outlook.com" style="color: #222; text-decoration: none;" data-astro-cid-uw5kdbxl>holdenlaine@outlook.com</a> </p> <p style="margin: 0.5rem 0;" data-astro-cid-uw5kdbxl> <a href="tel:+37255569043" style="color: #222; text-decoration: none;" data-astro-cid-uw5kdbxl>+372 555 69043</a> </p> </div> </div> </div> <!-- Gift Card Modal --> <div class="giftcard-modal" id="giftcardModal" data-astro-cid-uw5kdbxl> <div class="giftcard-modal-content" data-astro-cid-uw5kdbxl> <button class="close-btn" id="closeModal" data-astro-cid-uw5kdbxl>&times;</button> <h2 data-i18n="contact.selectGiftCardAmount" data-astro-cid-uw5kdbxl>Select Gift Card Amount</h2> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="giftcardAmount" data-i18n="contact.amount" data-astro-cid-uw5kdbxl>Amount</label> <select id="giftcardAmount" name="giftcardAmount" data-astro-cid-uw5kdbxl> <option value="100" data-astro-cid-uw5kdbxl>\u20AC100</option> <option value="150" data-astro-cid-uw5kdbxl>\u20AC150</option> </select> </div> <button class="checkout-btn" id="checkoutBtn" data-i18n="contact.proceedToPayment" data-astro-cid-uw5kdbxl>Proceed to Payment</button> <div id="giftcardMessage" class="form-message" data-astro-cid-uw5kdbxl></div> </div> </div> </div> </div>  <script>(function(){', `
      console.log('Translations loaded:', translations);
      window.t = translations || {};
      window.currentLang = localStorage.getItem('language') || 'en';
      console.log('Current language:', window.currentLang);
      const t = window.t;
      let currentLang = window.currentLang;

      // Get DOM elements first
      const form = document.getElementById('bookingForm');
      const formMessage = document.getElementById('formMessage');
      const calendarEl = document.getElementById('calendar');
      const timeSlotsEl = document.getElementById('timeSlots');
      const timeGridEl = document.getElementById('timeGrid');

      console.log('Calendar element:', calendarEl);

      // Calendar functionality
      let currentDate = new Date();
      let selectedDate = null;
      let selectedTime = null;

      // Available time slots (24-hour format)
      const weekdayEveningSlots = ['18:00', '19:00', '20:00', '21:00'];
      const weekendAllSlots = [
        '09:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00',
        '17:00', '18:00', '19:00', '20:00', '21:00'
      ];

      function renderTimeSlots(date) {
        if (!timeGridEl || !timeSlotsEl) return;

        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

        // Determine which time slots to show based on day of week
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
        const timeSlots = isWeekend ? weekendAllSlots : weekdayEveningSlots;

        let html = '';
        
        timeSlots.forEach(time => {
          const [hours, minutes] = time.split(':').map(Number);
          const slotTime = new Date(date);
          slotTime.setHours(hours, minutes, 0, 0);
          
          let classes = 'time-slot';
          
          // Disable past times if it's today
          if (isToday && slotTime < today) {
            classes += ' unavailable';
          }
          
          if (selectedTime === time) {
            classes += ' selected';
          }

          html += \`<div class="\${classes}" data-time="\${time}">\${time}</div>\`;
        });

        timeGridEl.innerHTML = html;
        timeSlotsEl.style.display = 'block';

        // Add click handlers to time slots
        const timeSlotElements = timeGridEl.querySelectorAll('.time-slot:not(.unavailable)');
        timeSlotElements.forEach(slotEl => {
          slotEl.addEventListener('click', (e) => {
            const target = e.target;
            const time = target.getAttribute('data-time');
            if (time && selectedDate) {
              selectedTime = time;
              renderTimeSlots(selectedDate);
              
              // Update form time field
              const timeInput = document.getElementById('time');
              if (timeInput) {
                timeInput.value = time;
              }
            }
          });
        });
      }

      function renderCalendar(date) {
        if (!calendarEl) {
          console.error('Calendar element not found');
          return;
        }

        console.log('Rendering calendar for:', date);

        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                            'July', 'August', 'September', 'October', 'November', 'December'];

        let html = \`
          <div class="calendar-header">
            <h3>\${monthNames[month]} \${year}</h3>
            <div class="calendar-nav">
              <button type="button" id="prevMonth">&lt;</button>
              <button type="button" id="nextMonth">&gt;</button>
            </div>
          </div>
          <div class="calendar-grid">
            <div class="calendar-day-header">Mon</div>
            <div class="calendar-day-header">Tue</div>
            <div class="calendar-day-header">Wed</div>
            <div class="calendar-day-header">Thu</div>
            <div class="calendar-day-header">Fri</div>
            <div class="calendar-day-header">Sat</div>
            <div class="calendar-day-header">Sun</div>
        \`;

        // Adjust starting day to Monday (0 = Sunday, so we convert to Monday = 0)
        const adjustedStartDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

        // Empty cells before the first day
        for (let i = 0; i < adjustedStartDay; i++) {
          html += '<div class="calendar-day empty"></div>';
        }

        // Days of the month
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let day = 1; day <= daysInMonth; day++) {
          const currentDay = new Date(year, month, day);
          currentDay.setHours(0, 0, 0, 0);
          
          let classes = 'calendar-day';
          
          if (currentDay < today) {
            classes += ' unavailable';
          }
          if (currentDay.getTime() === today.getTime()) {
            classes += ' today';
          }
          if (selectedDate && currentDay.getTime() === selectedDate.getTime()) {
            classes += ' selected';
          }

          html += \`<div class="\${classes}" data-date="\${year}-\${month}-\${day}">\${day}</div>\`;
        }

        html += '</div>';
        
        console.log('Setting calendar HTML');
        calendarEl.innerHTML = html;

        // Add event listeners
        const prevBtn = document.getElementById('prevMonth');
        const nextBtn = document.getElementById('nextMonth');
        
        if (prevBtn) prevBtn.addEventListener('click', () => {
          currentDate.setMonth(currentDate.getMonth() - 1);
          renderCalendar(currentDate);
        });
        
        if (nextBtn) nextBtn.addEventListener('click', () => {
          currentDate.setMonth(currentDate.getMonth() + 1);
          renderCalendar(currentDate);
        });

        // Day click handlers
        const dayElements = calendarEl.querySelectorAll('.calendar-day:not(.empty):not(.unavailable)');
        dayElements.forEach(dayEl => {
          dayEl.addEventListener('click', (e) => {
            const target = e.target;
            const dateStr = target.getAttribute('data-date');
            if (dateStr) {
              const [y, m, d] = dateStr.split('-').map(Number);
              selectedDate = new Date(y, m, d);
              selectedTime = null; // Reset selected time when date changes
              renderCalendar(currentDate);
              
              // Update form date field
              const dateInput = document.getElementById('date');
              if (dateInput) {
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const formattedDate = \`\${monthNames[m]} \${d}, \${y}\`;
                dateInput.value = formattedDate;
              }

              // Clear time field when date changes
              const timeInput = document.getElementById('time');
              if (timeInput) {
                timeInput.value = '';
                timeInput.placeholder = 'Select a time below';
              }

              // Show and render time slots
              renderTimeSlots(selectedDate);
            }
          });
        });
      }

      // Initialize calendar
      if (calendarEl) {
        renderCalendar(currentDate);
      }

      // Update page text based on language
      function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          const keys = key.split('.');
          let value = t[lang];
          for (const k of keys) {
            value = value[k];
          }
          if (value) {
            el.textContent = value;
          }
        });

        // Update placeholders
        document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
          const key = el.getAttribute('data-placeholder-i18n');
          const keys = key.split('.');
          let value = t[lang];
          for (const k of keys) {
            value = value[k];
          }
          if (value) {
            el.placeholder = value;
          }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update page title
        document.title = t[lang].contact.pageTitle;

        // Update submit button text during submission
        const submitBtn = form?.querySelector('.submit-btn');
        if (submitBtn && submitBtn.textContent !== t[lang].contact.requestBooking && submitBtn.textContent !== t[lang].contact.sending) {
          submitBtn.textContent = t[lang].contact.requestBooking;
        }

        // Re-render calendar to preserve functionality after language change
        if (calendarEl) {
          renderCalendar(currentDate);
          // Re-render time slots if a date is selected
          if (selectedDate && timeSlotsEl) {
            renderTimeSlots(selectedDate);
          }
        }
      }

      // Language toggle buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang) {
            updateLanguage(lang);
          }
        });
      });

      // Initialize with saved language
      updateLanguage(currentLang);

      // Form submission
      if (form && formMessage) {
      // Gift Card Validation
      const giftcardInput = document.getElementById('giftcard');
      const giftcardDisplay = document.createElement('div');
      giftcardDisplay.id = 'giftcardDisplay';
      giftcardDisplay.style.cssText = 'margin-top: 0.5rem; padding: 0.75rem; background: #f0f0f0; border-left: 3px solid #222; display: none; font-weight: 700;';
      if (giftcardInput) {
        giftcardInput.parentNode.insertBefore(giftcardDisplay, giftcardInput.nextSibling);

        giftcardInput.addEventListener('change', async (e) => {
          const code = e.target.value.trim();
          
          if (!code) {
            giftcardDisplay.style.display = 'none';
            return;
          }

          try {
            // Import gift cards data
            const giftcards = await fetch('/src/data/giftcards.json').then(r => r.json());
            const giftcard = giftcards.find(gc => gc.code.toUpperCase() === code.toUpperCase());

            if (giftcard) {
              if (giftcard.status === 'redeemed') {
                giftcardDisplay.style.background = '#f8d7da';
                giftcardDisplay.style.borderLeftColor = '#721c24';
                giftcardDisplay.style.color = '#721c24';
                giftcardDisplay.textContent = '\u274C This gift card has already been redeemed';
              } else {
                giftcardDisplay.style.background = '#d4edda';
                giftcardDisplay.style.borderLeftColor = '#155724';
                giftcardDisplay.style.color = '#155724';
                giftcardDisplay.textContent = \`\u2713 Valid gift card - \u20AC\${giftcard.amount} credit\`;
              }
              giftcardDisplay.style.display = 'block';
            } else {
              giftcardDisplay.style.background = '#f8d7da';
              giftcardDisplay.style.borderLeftColor = '#721c24';
              giftcardDisplay.style.color = '#721c24';
              giftcardDisplay.textContent = '\u274C Invalid gift card code';
              giftcardDisplay.style.display = 'block';
            }
          } catch (error) {
            console.error('Gift card validation error:', error);
          }
        });
      }

      form.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const submitBtn = form.querySelector('.submit-btn');
          if (!submitBtn) return;
          
          // Set the reply-to field to the user's email
          const emailInput = document.getElementById('email');
          const replytoInput = document.getElementById('replyto');
          if (emailInput && replytoInput) {
            replytoInput.value = emailInput.value;
          }
          
          submitBtn.disabled = true;
          submitBtn.textContent = t[currentLang].contact.sending;
          formMessage.className = 'form-message';
          formMessage.style.display = 'none';

          try {
            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(Object.fromEntries(new FormData(form)))
            });

            const result = await response.json();

            if (result.success) {
              formMessage.className = 'form-message success';
              formMessage.textContent = t[currentLang].contact.successMessage;
              form.reset();
              
              // Hide time slots and reset calendar
              if (timeSlotsEl) {
                timeSlotsEl.style.display = 'none';
              }
              selectedDate = null;
              selectedTime = null;
              renderCalendar(currentDate); // Re-render to clear selection
            } else {
              throw new Error(result.message || 'Submission failed');
            }
          } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.textContent = t[currentLang].contact.errorMessage;
            console.error('Form submission error:', error);
          } finally {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = t[currentLang].contact.requestBooking;
            }
          }
        });
      }
    })();<\/script> <script src="/scripts/letterfall.js"><\/script> <script>
      // Translation object for navigation
      const translations = {
        'en': {
          'nav.home': 'HOME',
          'nav.portraits': 'PHOTOS',
          'nav.studio': 'STUDIO',
          'nav.projects': 'PROJECTS',
          'nav.prices': 'PRICES',
          'nav.tshirts': 'SHOP',
          'nav.contact': 'CONTACT'
        },
        'et': {
          'nav.home': 'AVALEHT',
          'nav.portraits': 'FOTOD',
          'nav.studio': 'STUUDIO',
          'nav.projects': 'PROJEKTID',
          'nav.prices': 'HINNAKIRI',
          'nav.tshirts': 'E-POOD',
          'nav.contact': 'KONTAKT'
        }
      };

      function updateTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
          }
        });
      }

      // Restore language preference on page load
      const savedLang = localStorage.getItem('language') || 'en';
      document.documentElement.lang = savedLang;
      updateTranslations(savedLang);
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === savedLang);
      });

      // Language toggle functionality
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = btn.getAttribute('data-lang');
          if (lang) {
            window.currentLang = lang;
            currentLang = lang;
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
            updateTranslations(lang);
            document.querySelectorAll('.lang-btn').forEach(b => {
              b.classList.toggle('active', b.getAttribute('data-lang') === lang);
            });
          }
        });
      });

      // Gift Card Modal Functionality
      const buyGiftcardBtn = document.getElementById('buyGiftcardBtn');
      const giftcardModal = document.getElementById('giftcardModal');
      const closeModal = document.getElementById('closeModal');
      const checkoutBtn = document.getElementById('checkoutBtn');
      const giftcardAmount = document.getElementById('giftcardAmount');
      const giftcardMessage = document.getElementById('giftcardMessage');

      if (buyGiftcardBtn) {
        buyGiftcardBtn.addEventListener('click', () => {
          giftcardModal.classList.add('open');
        });
      }

      if (closeModal) {
        closeModal.addEventListener('click', () => {
          giftcardModal.classList.remove('open');
          giftcardMessage.className = 'form-message';
          giftcardMessage.textContent = '';
        });
      }

      if (giftcardModal) {
        giftcardModal.addEventListener('click', (e) => {
          if (e.target === giftcardModal) {
            giftcardModal.classList.remove('open');
            giftcardMessage.className = 'form-message';
            giftcardMessage.textContent = '';
          }
        });
      }

      if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async () => {
          const amount = parseInt(giftcardAmount.value);
          checkoutBtn.disabled = true;
          giftcardMessage.className = 'form-message';
          
          try {
            giftcardMessage.textContent = (window.t && window.t[window.currentLang] && window.t[window.currentLang].contact && window.t[window.currentLang].contact.sending) || 'Processing...';

            const response = await fetch('/api/stripe-checkout.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                giftCardAmount: amount,
                successUrl: window.location.origin + '/gift-card-success',
                cancelUrl: window.location.origin + '/contact',
              }),
            });

            if (!response.ok) {
              throw new Error('Failed to create checkout session');
            }

            const data = await response.json();
            console.log('Checkout response:', data);

            if (!data.url) {
              throw new Error('No checkout URL received from server');
            }

            // Redirect to Stripe hosted checkout
            window.location.href = data.url;
          } catch (error) {
            console.error('Error:', error);
            giftcardMessage.className = 'form-message error';
            giftcardMessage.textContent = (window.t && window.t[window.currentLang] && window.t[window.currentLang].contact && window.t[window.currentLang].contact.errorMessage) || 'Something went wrong. Please try again.';
            checkoutBtn.disabled = false;
          }
        });
      }
    <\/script> </body> </html>`], ['<html lang="en" data-astro-cid-uw5kdbxl> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">', "", '</head> <body data-astro-cid-uw5kdbxl> <canvas id="letterfall-canvas" data-astro-cid-uw5kdbxl></canvas> ', " ", " ", ' <div class="container" data-astro-cid-uw5kdbxl> <div class="sidebar" data-astro-cid-uw5kdbxl> <nav data-astro-cid-uw5kdbxl> <a href="/" data-i18n="nav.home" data-astro-cid-uw5kdbxl>HOME</a> <a href="/studio" data-i18n="nav.studio" data-astro-cid-uw5kdbxl>STUDIO</a> <a href="/photos" data-i18n="nav.portraits" data-astro-cid-uw5kdbxl>PHOTOS</a> <a href="/projects" data-i18n="nav.projects" data-astro-cid-uw5kdbxl>PROJECTS</a> <a href="/prices" data-i18n="nav.prices" data-astro-cid-uw5kdbxl>PRICES</a> <a href="/shop" data-i18n="nav.tshirts" data-astro-cid-uw5kdbxl>SHOP</a> <a href="/gift-cards" data-astro-cid-uw5kdbxl>GIFT CARDS</a> <a href="/contact" data-i18n="nav.contact" data-astro-cid-uw5kdbxl>CONTACT</a> </nav> </div> <div class="main-content" data-astro-cid-uw5kdbxl> <h1 data-i18n="contact.heading" data-astro-cid-uw5kdbxl>Contact</h1> <!-- Gift Card Section at Top --> <div style="background: #f9f9f9; padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem;" data-astro-cid-uw5kdbxl> <h2 style="margin-top: 0;" data-i18n="contact.giftCards" data-astro-cid-uw5kdbxl>Gift Cards</h2> <p data-i18n="contact.giftCardDescription" data-astro-cid-uw5kdbxl>Purchase a gift card for photography sessions and share the gift of professional photography with someone special.</p> <button class="giftcard-btn" id="buyGiftcardBtn" data-i18n="contact.buyGiftCard" data-astro-cid-uw5kdbxl>Buy a Gift Card</button> </div> <div class="content-wrapper" data-astro-cid-uw5kdbxl> <div class="contact-section" data-astro-cid-uw5kdbxl> <h2 data-i18n="contact.bookSession" data-astro-cid-uw5kdbxl>Book a Session</h2> <form class="booking-form" id="bookingForm" data-astro-cid-uw5kdbxl> <input type="hidden" name="access_key" value="dff7794e-dac3-4702-8fb9-bc764d21f727" data-astro-cid-uw5kdbxl> <input type="hidden" name="subject" value="New Booking Request from Holden Laine Photography" data-astro-cid-uw5kdbxl> <input type="hidden" name="from_name" value="Holden Laine Photography Contact Form" data-astro-cid-uw5kdbxl> <input type="hidden" name="replyto" id="replyto" value="" data-astro-cid-uw5kdbxl> <input type="hidden" name="cc" value="" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="name" data-astro-cid-uw5kdbxl><span data-i18n="contact.name" data-astro-cid-uw5kdbxl>Name</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="text" id="name" name="name" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="email" data-astro-cid-uw5kdbxl><span data-i18n="contact.email" data-astro-cid-uw5kdbxl>Email</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="email" id="email" name="email" required data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="phone" data-i18n="contact.phone" data-astro-cid-uw5kdbxl>Phone</label> <input type="tel" id="phone" name="phone" data-astro-cid-uw5kdbxl> </div> <div class="form-row" data-astro-cid-uw5kdbxl> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="date" data-astro-cid-uw5kdbxl><span data-i18n="contact.preferredDate" data-astro-cid-uw5kdbxl>Preferred Date</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="text" id="date" name="date" required readonly data-placeholder-i18n="contact.selectFromCalendar" placeholder="Select from calendar" data-astro-cid-uw5kdbxl> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="time" data-astro-cid-uw5kdbxl><span data-i18n="contact.preferredTime" data-astro-cid-uw5kdbxl>Preferred Time</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <input type="text" id="time" name="time" required readonly data-placeholder-i18n="contact.selectDateFirst" placeholder="Select a date first" data-astro-cid-uw5kdbxl> </div> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="session-type" data-astro-cid-uw5kdbxl><span data-i18n="contact.sessionType" data-astro-cid-uw5kdbxl>Session Type</span> <span data-i18n="contact.required" data-astro-cid-uw5kdbxl>*</span></label> <select id="session-type" name="session-type" required data-astro-cid-uw5kdbxl> <option value="" data-i18n="contact.selectSessionType" data-astro-cid-uw5kdbxl>Select a session type</option> <option value="portrait" data-i18n="contact.portraitSession" data-astro-cid-uw5kdbxl>Portrait Session</option> <option value="event" data-i18n="contact.eventPhotography" data-astro-cid-uw5kdbxl>Event Photography</option> <option value="commercial" data-i18n="contact.commercialProject" data-astro-cid-uw5kdbxl>Commercial Project</option> <option value="other" data-i18n="contact.other" data-astro-cid-uw5kdbxl>Other</option> </select> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="message" data-i18n="contact.message" data-astro-cid-uw5kdbxl>Message</label> <textarea id="message" name="message" data-placeholder-i18n="contact.messagePlaceholder" placeholder="Tell me about your project or any specific requirements..." data-astro-cid-uw5kdbxl></textarea> </div> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="giftcard" data-i18n="contact.giftcardCode" data-astro-cid-uw5kdbxl>Gift Card Code (Optional)</label> <input type="text" id="giftcard" name="giftcard" data-placeholder-i18n="contact.giftcardCodePlaceholder" placeholder="Enter your gift card code if you have one" data-astro-cid-uw5kdbxl> </div> <button type="submit" class="submit-btn" data-i18n="contact.requestBooking" data-astro-cid-uw5kdbxl>Request Booking</button> <div class="form-message" id="formMessage" data-astro-cid-uw5kdbxl></div> </form> </div> <div class="contact-section" data-astro-cid-uw5kdbxl> <h2 data-i18n="contact.availabilityCalendar" data-astro-cid-uw5kdbxl>Availability Calendar</h2> <div id="calendar" data-astro-cid-uw5kdbxl></div> <div id="timeSlots" style="display: none;" data-astro-cid-uw5kdbxl> <div class="time-slots" data-astro-cid-uw5kdbxl> <h3 data-i18n="contact.availableTimes" data-astro-cid-uw5kdbxl>Available Times</h3> <div class="time-grid" id="timeGrid" data-astro-cid-uw5kdbxl></div> </div> </div> <!-- Contact Details Under Calendar --> <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #ddd;" data-astro-cid-uw5kdbxl> <h3 style="margin-top: 0;" data-astro-cid-uw5kdbxl>Direct Contact</h3> <p style="margin: 0.5rem 0;" data-astro-cid-uw5kdbxl> <a href="mailto:holdenlaine@outlook.com" style="color: #222; text-decoration: none;" data-astro-cid-uw5kdbxl>holdenlaine@outlook.com</a> </p> <p style="margin: 0.5rem 0;" data-astro-cid-uw5kdbxl> <a href="tel:+37255569043" style="color: #222; text-decoration: none;" data-astro-cid-uw5kdbxl>+372 555 69043</a> </p> </div> </div> </div> <!-- Gift Card Modal --> <div class="giftcard-modal" id="giftcardModal" data-astro-cid-uw5kdbxl> <div class="giftcard-modal-content" data-astro-cid-uw5kdbxl> <button class="close-btn" id="closeModal" data-astro-cid-uw5kdbxl>&times;</button> <h2 data-i18n="contact.selectGiftCardAmount" data-astro-cid-uw5kdbxl>Select Gift Card Amount</h2> <div class="form-group" data-astro-cid-uw5kdbxl> <label for="giftcardAmount" data-i18n="contact.amount" data-astro-cid-uw5kdbxl>Amount</label> <select id="giftcardAmount" name="giftcardAmount" data-astro-cid-uw5kdbxl> <option value="100" data-astro-cid-uw5kdbxl>\u20AC100</option> <option value="150" data-astro-cid-uw5kdbxl>\u20AC150</option> </select> </div> <button class="checkout-btn" id="checkoutBtn" data-i18n="contact.proceedToPayment" data-astro-cid-uw5kdbxl>Proceed to Payment</button> <div id="giftcardMessage" class="form-message" data-astro-cid-uw5kdbxl></div> </div> </div> </div> </div>  <script>(function(){', `
      console.log('Translations loaded:', translations);
      window.t = translations || {};
      window.currentLang = localStorage.getItem('language') || 'en';
      console.log('Current language:', window.currentLang);
      const t = window.t;
      let currentLang = window.currentLang;

      // Get DOM elements first
      const form = document.getElementById('bookingForm');
      const formMessage = document.getElementById('formMessage');
      const calendarEl = document.getElementById('calendar');
      const timeSlotsEl = document.getElementById('timeSlots');
      const timeGridEl = document.getElementById('timeGrid');

      console.log('Calendar element:', calendarEl);

      // Calendar functionality
      let currentDate = new Date();
      let selectedDate = null;
      let selectedTime = null;

      // Available time slots (24-hour format)
      const weekdayEveningSlots = ['18:00', '19:00', '20:00', '21:00'];
      const weekendAllSlots = [
        '09:00', '10:00', '11:00', '12:00',
        '13:00', '14:00', '15:00', '16:00',
        '17:00', '18:00', '19:00', '20:00', '21:00'
      ];

      function renderTimeSlots(date) {
        if (!timeGridEl || !timeSlotsEl) return;

        const today = new Date();
        const isToday = date.toDateString() === today.toDateString();
        const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday

        // Determine which time slots to show based on day of week
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
        const timeSlots = isWeekend ? weekendAllSlots : weekdayEveningSlots;

        let html = '';
        
        timeSlots.forEach(time => {
          const [hours, minutes] = time.split(':').map(Number);
          const slotTime = new Date(date);
          slotTime.setHours(hours, minutes, 0, 0);
          
          let classes = 'time-slot';
          
          // Disable past times if it's today
          if (isToday && slotTime < today) {
            classes += ' unavailable';
          }
          
          if (selectedTime === time) {
            classes += ' selected';
          }

          html += \\\`<div class="\\\${classes}" data-time="\\\${time}">\\\${time}</div>\\\`;
        });

        timeGridEl.innerHTML = html;
        timeSlotsEl.style.display = 'block';

        // Add click handlers to time slots
        const timeSlotElements = timeGridEl.querySelectorAll('.time-slot:not(.unavailable)');
        timeSlotElements.forEach(slotEl => {
          slotEl.addEventListener('click', (e) => {
            const target = e.target;
            const time = target.getAttribute('data-time');
            if (time && selectedDate) {
              selectedTime = time;
              renderTimeSlots(selectedDate);
              
              // Update form time field
              const timeInput = document.getElementById('time');
              if (timeInput) {
                timeInput.value = time;
              }
            }
          });
        });
      }

      function renderCalendar(date) {
        if (!calendarEl) {
          console.error('Calendar element not found');
          return;
        }

        console.log('Rendering calendar for:', date);

        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                            'July', 'August', 'September', 'October', 'November', 'December'];

        let html = \\\`
          <div class="calendar-header">
            <h3>\\\${monthNames[month]} \\\${year}</h3>
            <div class="calendar-nav">
              <button type="button" id="prevMonth">&lt;</button>
              <button type="button" id="nextMonth">&gt;</button>
            </div>
          </div>
          <div class="calendar-grid">
            <div class="calendar-day-header">Mon</div>
            <div class="calendar-day-header">Tue</div>
            <div class="calendar-day-header">Wed</div>
            <div class="calendar-day-header">Thu</div>
            <div class="calendar-day-header">Fri</div>
            <div class="calendar-day-header">Sat</div>
            <div class="calendar-day-header">Sun</div>
        \\\`;

        // Adjust starting day to Monday (0 = Sunday, so we convert to Monday = 0)
        const adjustedStartDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;

        // Empty cells before the first day
        for (let i = 0; i < adjustedStartDay; i++) {
          html += '<div class="calendar-day empty"></div>';
        }

        // Days of the month
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        for (let day = 1; day <= daysInMonth; day++) {
          const currentDay = new Date(year, month, day);
          currentDay.setHours(0, 0, 0, 0);
          
          let classes = 'calendar-day';
          
          if (currentDay < today) {
            classes += ' unavailable';
          }
          if (currentDay.getTime() === today.getTime()) {
            classes += ' today';
          }
          if (selectedDate && currentDay.getTime() === selectedDate.getTime()) {
            classes += ' selected';
          }

          html += \\\`<div class="\\\${classes}" data-date="\\\${year}-\\\${month}-\\\${day}">\\\${day}</div>\\\`;
        }

        html += '</div>';
        
        console.log('Setting calendar HTML');
        calendarEl.innerHTML = html;

        // Add event listeners
        const prevBtn = document.getElementById('prevMonth');
        const nextBtn = document.getElementById('nextMonth');
        
        if (prevBtn) prevBtn.addEventListener('click', () => {
          currentDate.setMonth(currentDate.getMonth() - 1);
          renderCalendar(currentDate);
        });
        
        if (nextBtn) nextBtn.addEventListener('click', () => {
          currentDate.setMonth(currentDate.getMonth() + 1);
          renderCalendar(currentDate);
        });

        // Day click handlers
        const dayElements = calendarEl.querySelectorAll('.calendar-day:not(.empty):not(.unavailable)');
        dayElements.forEach(dayEl => {
          dayEl.addEventListener('click', (e) => {
            const target = e.target;
            const dateStr = target.getAttribute('data-date');
            if (dateStr) {
              const [y, m, d] = dateStr.split('-').map(Number);
              selectedDate = new Date(y, m, d);
              selectedTime = null; // Reset selected time when date changes
              renderCalendar(currentDate);
              
              // Update form date field
              const dateInput = document.getElementById('date');
              if (dateInput) {
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                const formattedDate = \\\`\\\${monthNames[m]} \\\${d}, \\\${y}\\\`;
                dateInput.value = formattedDate;
              }

              // Clear time field when date changes
              const timeInput = document.getElementById('time');
              if (timeInput) {
                timeInput.value = '';
                timeInput.placeholder = 'Select a time below';
              }

              // Show and render time slots
              renderTimeSlots(selectedDate);
            }
          });
        });
      }

      // Initialize calendar
      if (calendarEl) {
        renderCalendar(currentDate);
      }

      // Update page text based on language
      function updateLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          const keys = key.split('.');
          let value = t[lang];
          for (const k of keys) {
            value = value[k];
          }
          if (value) {
            el.textContent = value;
          }
        });

        // Update placeholders
        document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
          const key = el.getAttribute('data-placeholder-i18n');
          const keys = key.split('.');
          let value = t[lang];
          for (const k of keys) {
            value = value[k];
          }
          if (value) {
            el.placeholder = value;
          }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
          btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Update page title
        document.title = t[lang].contact.pageTitle;

        // Update submit button text during submission
        const submitBtn = form?.querySelector('.submit-btn');
        if (submitBtn && submitBtn.textContent !== t[lang].contact.requestBooking && submitBtn.textContent !== t[lang].contact.sending) {
          submitBtn.textContent = t[lang].contact.requestBooking;
        }

        // Re-render calendar to preserve functionality after language change
        if (calendarEl) {
          renderCalendar(currentDate);
          // Re-render time slots if a date is selected
          if (selectedDate && timeSlotsEl) {
            renderTimeSlots(selectedDate);
          }
        }
      }

      // Language toggle buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang) {
            updateLanguage(lang);
          }
        });
      });

      // Initialize with saved language
      updateLanguage(currentLang);

      // Form submission
      if (form && formMessage) {
      // Gift Card Validation
      const giftcardInput = document.getElementById('giftcard');
      const giftcardDisplay = document.createElement('div');
      giftcardDisplay.id = 'giftcardDisplay';
      giftcardDisplay.style.cssText = 'margin-top: 0.5rem; padding: 0.75rem; background: #f0f0f0; border-left: 3px solid #222; display: none; font-weight: 700;';
      if (giftcardInput) {
        giftcardInput.parentNode.insertBefore(giftcardDisplay, giftcardInput.nextSibling);

        giftcardInput.addEventListener('change', async (e) => {
          const code = e.target.value.trim();
          
          if (!code) {
            giftcardDisplay.style.display = 'none';
            return;
          }

          try {
            // Import gift cards data
            const giftcards = await fetch('/src/data/giftcards.json').then(r => r.json());
            const giftcard = giftcards.find(gc => gc.code.toUpperCase() === code.toUpperCase());

            if (giftcard) {
              if (giftcard.status === 'redeemed') {
                giftcardDisplay.style.background = '#f8d7da';
                giftcardDisplay.style.borderLeftColor = '#721c24';
                giftcardDisplay.style.color = '#721c24';
                giftcardDisplay.textContent = '\u274C This gift card has already been redeemed';
              } else {
                giftcardDisplay.style.background = '#d4edda';
                giftcardDisplay.style.borderLeftColor = '#155724';
                giftcardDisplay.style.color = '#155724';
                giftcardDisplay.textContent = \\\`\u2713 Valid gift card - \u20AC\\\${giftcard.amount} credit\\\`;
              }
              giftcardDisplay.style.display = 'block';
            } else {
              giftcardDisplay.style.background = '#f8d7da';
              giftcardDisplay.style.borderLeftColor = '#721c24';
              giftcardDisplay.style.color = '#721c24';
              giftcardDisplay.textContent = '\u274C Invalid gift card code';
              giftcardDisplay.style.display = 'block';
            }
          } catch (error) {
            console.error('Gift card validation error:', error);
          }
        });
      }

      form.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const submitBtn = form.querySelector('.submit-btn');
          if (!submitBtn) return;
          
          // Set the reply-to field to the user's email
          const emailInput = document.getElementById('email');
          const replytoInput = document.getElementById('replyto');
          if (emailInput && replytoInput) {
            replytoInput.value = emailInput.value;
          }
          
          submitBtn.disabled = true;
          submitBtn.textContent = t[currentLang].contact.sending;
          formMessage.className = 'form-message';
          formMessage.style.display = 'none';

          try {
            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify(Object.fromEntries(new FormData(form)))
            });

            const result = await response.json();

            if (result.success) {
              formMessage.className = 'form-message success';
              formMessage.textContent = t[currentLang].contact.successMessage;
              form.reset();
              
              // Hide time slots and reset calendar
              if (timeSlotsEl) {
                timeSlotsEl.style.display = 'none';
              }
              selectedDate = null;
              selectedTime = null;
              renderCalendar(currentDate); // Re-render to clear selection
            } else {
              throw new Error(result.message || 'Submission failed');
            }
          } catch (error) {
            formMessage.className = 'form-message error';
            formMessage.textContent = t[currentLang].contact.errorMessage;
            console.error('Form submission error:', error);
          } finally {
            if (submitBtn) {
              submitBtn.disabled = false;
              submitBtn.textContent = t[currentLang].contact.requestBooking;
            }
          }
        });
      }
    })();<\/script> <script src="/scripts/letterfall.js"><\/script> <script>
      // Translation object for navigation
      const translations = {
        'en': {
          'nav.home': 'HOME',
          'nav.portraits': 'PHOTOS',
          'nav.studio': 'STUDIO',
          'nav.projects': 'PROJECTS',
          'nav.prices': 'PRICES',
          'nav.tshirts': 'SHOP',
          'nav.contact': 'CONTACT'
        },
        'et': {
          'nav.home': 'AVALEHT',
          'nav.portraits': 'FOTOD',
          'nav.studio': 'STUUDIO',
          'nav.projects': 'PROJEKTID',
          'nav.prices': 'HINNAKIRI',
          'nav.tshirts': 'E-POOD',
          'nav.contact': 'KONTAKT'
        }
      };

      function updateTranslations(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
          }
        });
      }

      // Restore language preference on page load
      const savedLang = localStorage.getItem('language') || 'en';
      document.documentElement.lang = savedLang;
      updateTranslations(savedLang);
      document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-lang') === savedLang);
      });

      // Language toggle functionality
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const lang = btn.getAttribute('data-lang');
          if (lang) {
            window.currentLang = lang;
            currentLang = lang;
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
            updateTranslations(lang);
            document.querySelectorAll('.lang-btn').forEach(b => {
              b.classList.toggle('active', b.getAttribute('data-lang') === lang);
            });
          }
        });
      });

      // Gift Card Modal Functionality
      const buyGiftcardBtn = document.getElementById('buyGiftcardBtn');
      const giftcardModal = document.getElementById('giftcardModal');
      const closeModal = document.getElementById('closeModal');
      const checkoutBtn = document.getElementById('checkoutBtn');
      const giftcardAmount = document.getElementById('giftcardAmount');
      const giftcardMessage = document.getElementById('giftcardMessage');

      if (buyGiftcardBtn) {
        buyGiftcardBtn.addEventListener('click', () => {
          giftcardModal.classList.add('open');
        });
      }

      if (closeModal) {
        closeModal.addEventListener('click', () => {
          giftcardModal.classList.remove('open');
          giftcardMessage.className = 'form-message';
          giftcardMessage.textContent = '';
        });
      }

      if (giftcardModal) {
        giftcardModal.addEventListener('click', (e) => {
          if (e.target === giftcardModal) {
            giftcardModal.classList.remove('open');
            giftcardMessage.className = 'form-message';
            giftcardMessage.textContent = '';
          }
        });
      }

      if (checkoutBtn) {
        checkoutBtn.addEventListener('click', async () => {
          const amount = parseInt(giftcardAmount.value);
          checkoutBtn.disabled = true;
          giftcardMessage.className = 'form-message';
          
          try {
            giftcardMessage.textContent = (window.t && window.t[window.currentLang] && window.t[window.currentLang].contact && window.t[window.currentLang].contact.sending) || 'Processing...';

            const response = await fetch('/api/stripe-checkout.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                giftCardAmount: amount,
                successUrl: window.location.origin + '/gift-card-success',
                cancelUrl: window.location.origin + '/contact',
              }),
            });

            if (!response.ok) {
              throw new Error('Failed to create checkout session');
            }

            const data = await response.json();
            console.log('Checkout response:', data);

            if (!data.url) {
              throw new Error('No checkout URL received from server');
            }

            // Redirect to Stripe hosted checkout
            window.location.href = data.url;
          } catch (error) {
            console.error('Error:', error);
            giftcardMessage.className = 'form-message error';
            giftcardMessage.textContent = (window.t && window.t[window.currentLang] && window.t[window.currentLang].contact && window.t[window.currentLang].contact.errorMessage) || 'Something went wrong. Please try again.';
            checkoutBtn.disabled = false;
          }
        });
      }
    <\/script> </body> </html>`])), renderComponent($$result, "SEO", $$SEO, { "title": "Contact", "titleEt": "Kontakt", "description": "Get in touch with Holden Laine for photography inquiries, collaborations, bookings, and creative projects.", "descriptionEt": "V\xF5tke \xFChendust Holden Lainega fotograafia p\xE4ringute, koost\xF6\xF6, broneering ja loovprojektide jaoks.", "type": "website", "data-astro-cid-uw5kdbxl": true }), renderHead(), renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-uw5kdbxl": true }), renderComponent($$result, "Cursor", $$Cursor, { "data-astro-cid-uw5kdbxl": true }), renderComponent($$result, "HamburgerMenu", $$HamburgerMenu, { "data-astro-cid-uw5kdbxl": true }), defineScriptVars({ translations }));
}, "/Users/holdenlaine/holdenlaine-website/src/pages/contact.astro", void 0);

const $$file = "/Users/holdenlaine/holdenlaine-website/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
