<template>
  <section id="contact" class="py-20 px-4 bg-white dark:bg-gray-800">
    <div class="max-w-4xl mx-auto">
      <div class="scroll-animate text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Get in touch 👨‍💻
        </h2>
        <div
          class="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"
        ></div>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Feel free to contact me at any time! Happy to discuss new ideas.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <div class="scroll-animate" style="animation-delay: 0.2s">
          <div class="space-y-6">
            <div class="contact-item">
              <MailIcon class="h-6 w-6 text-blue-600" />
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Email
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  larryjunior21@hotmail.com
                </p>
              </div>
            </div>

            <div class="contact-item">
              <MapPinIcon class="h-6 w-6 text-purple-600" />
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white">
                  Location
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Melbourne, VIC - Australia
                </p>
              </div>
            </div>

            <div class="flex space-x-4 pt-6 justify-self-center">
              <a href="https://github.com/LarryJunior21" class="social-link">
                <GithubIcon class="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/larryjunior2121/"
                class="social-link"
              >
                <LinkedinIcon class="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div class="scroll-animate" style="animation-delay: 0.4s">
          <form class="space-y-6 contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <input
                id="name"
                v-model="contactForm.name"
                type="text"
                placeholder="Your Name"
                class="form-input"
                required
              />
            </div>

            <div class="form-group">
              <input
                id="email"
                v-model="contactForm.email"
                type="text"
                placeholder="Your Email"
                class="form-input"
                required
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                @input="emailDirty = true"
              />
            </div>
            <p
              v-if="emailDirty && !isValidEmail"
              class="text-red-500 text-sm mt-[-1.5em]"
            >
              Please enter a valid email address.
            </p>

            <div class="form-group">
              <input
                id="subject"
                v-model="contactForm.subject"
                type="text"
                placeholder="Subject"
                class="form-input"
                required
              />
            </div>

            <div class="form-group">
              <textarea
                id="message"
                v-model="contactForm.message"
                placeholder="Your Message"
                rows="5"
                class="form-input"
                required
              ></textarea>
            </div>

            <button
              :disabled="!isValidEmail"
              type="submit"
              class="submit-btn group cursor-pointer"
              :style="!isValidEmail ? 'background: gray;' : ''"
            >
              <span>Send Message</span>
              <SendIcon
                class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  <ReusableMessageModal :title="title" :message="message" />
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const emailDirty = ref(false);

const config = useRuntimeConfig();

const publicKey = config.public.EMAILJS_PUBLIC_KEY;
const serviceId = config.public.EMAILJS_SERVICE_ID;
const templateId = config.public.EMAILJS_TEMPLATE_ID;

const title = ref("Email sent");
const message = ref(
  "Thank you for your e-mail! I'll do my best to reply as soon as possible!"
);

// Contact form
const contactForm = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isValidEmail = computed(() => {
  if (!emailDirty.value) return true; // skip validation if not dirty
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(contactForm.value.email);
});

const submitForm = () => {
  if (!isValidEmail.value) {
    return;
  }

  try {
    emailjs.send(serviceId, templateId, contactForm.value, {
      publicKey,
    });
    document.getElementById("reactiveModal").showModal();
  } catch (err) {
    title.value = "Email not sent";
    message.value = "Please try again later." + err;
  }

  emailDirty.value = false;
  // Reset form
  contactForm.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
</script>

<style scoped>
@reference "tailwindcss";
.contact-item {
  @apply flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:shadow-md;
}

.social-link {
  @apply bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 p-3 rounded-full transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110;
}

.contact-form {
  @apply bg-gray-50 dark:bg-gray-700 p-8 rounded-xl;
}

.form-group {
  position: relative;
}

.form-input {
  @apply w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300;
}

.form-input:focus {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.submit-btn {
  @apply w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center;
}
</style>
