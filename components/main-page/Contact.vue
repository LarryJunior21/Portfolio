<template>
  <section id="contact" class="py-16 bg-gray-100 dark:bg-gray-800">
    <div class="container mx-auto px-4">
      <div class="font-bold text-center text-gray-900 dark:text-white mb-12">
        <h2 class="text-3xl">Get In Touch</h2>
        <h4>* Please check your spam folder if no e-mail is received</h4>
      </div>
      <div class="max-w-2xl mx-auto">
        <form class="space-y-6" @submit.prevent="submitForm">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                for="name"
                class="block text-gray-700 dark:text-gray-300 mb-2"
                >Name</label
              >
              <input
                id="name"
                v-model="contactForm.name"
                type="text"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
            <div>
              <label
                for="email"
                class="block text-gray-700 dark:text-gray-300 mb-2"
                >Email</label
              >
              <input
                id="email"
                v-model="contactForm.email"
                type="email"
                class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>
          </div>
          <div>
            <label
              for="subject"
              class="block text-gray-700 dark:text-gray-300 mb-2"
              >Subject</label
            >
            <input
              id="subject"
              v-model="contactForm.subject"
              type="text"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              for="message"
              class="block text-gray-700 dark:text-gray-300 mb-2"
              >Message</label
            >
            <textarea
              id="message"
              v-model="contactForm.message"
              rows="5"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 dark:bg-gray-700 dark:text-white"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              class="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <ReusableMessageModal :title="title" :message="message" />
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const config = useRuntimeConfig();

const publicKey = config.public.EMAILJS_PUBLIC_KEY;
const serviceId = config.public.EMAILJS_SERVICE_ID;
const templateId = config.public.EMAILJS_TEMPLATE_ID;

const title = ref('Email sent');
const message = ref(
  "Thank you for your e-mail! I'll do my best to reply as soon as possible!"
);

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

const submitForm = () => {
  try {
    emailjs.send(serviceId, templateId, contactForm.value, {
      publicKey,
    });
    document.getElementById('reactiveModal').showModal();
  } catch (err) {
    title.value = 'Email not sent';
    message.value = 'Please try again later.' + err;
  }

  // Reset form
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };
};
</script>
