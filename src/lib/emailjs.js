const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

function readEnv(name) {
  const value = import.meta.env[name];
  return typeof value === 'string' ? value.trim() : '';
}

const config = {
  publicKey: readEnv('VITE_EMAILJS_PUBLIC_KEY'),
  contact: {
    serviceId: readEnv('VITE_EMAILJS_SERVICE_ID_CONTACT'),
    templateId: readEnv('VITE_EMAILJS_TEMPLATE_ID_CONTACT'),
  },
  popup: {
    serviceId: readEnv('VITE_EMAILJS_SERVICE_ID_POPUP'),
    templateId: readEnv('VITE_EMAILJS_TEMPLATE_ID_POPUP'),
  },
};

function validateConfig(channel) {
  const channelConfig = config[channel];
  if (!config.publicKey || !channelConfig?.serviceId || !channelConfig?.templateId) {
    throw new Error(
      `Missing EmailJS configuration for "${channel}". Add required VITE_EMAILJS_* values in your .env file.`
    );
  }
}

export async function sendEmailJS(channel, templateParams) {
  validateConfig(channel);
  const channelConfig = config[channel];

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: channelConfig.serviceId,
      template_id: channelConfig.templateId,
      user_id: config.publicKey,
      template_params: templateParams,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(details || 'EmailJS request failed.');
  }
}
