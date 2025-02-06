import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaIdCard } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { useTheme } from '../../context/ThemeContext';
import ReactCountryFlag from 'react-country-flag';
import axios from 'axios';
import toast from 'react-hot-toast';

import { useTranslations } from 'next-intl';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [message, setMessage] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [sending, setSending] = useState(false);
  const [subject, setSubject] = useState('');
  const t = useTranslations("contact");

  const handleSendLinkedIn = () => {
    if (!message.trim()) {
      toast.error(t("messages.errors.emptyMessage"));
      return;
    }

    const linkedinMessageUrl = `https://www.linkedin.com/messaging/compose?recipient=bekircanbaykal&body=${encodeURIComponent(message)}`;
    window.open(linkedinMessageUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSendEmail = async () => {
    if (!message.trim() || !senderEmail.trim() || !subject.trim()) {
      toast.error(t("messages.errors.allFieldsRequired"));
      return;
    }

    setSending(true);
    try {
      const response = await axios.post('/api/send-email', {
        message,
        senderEmail,
        subject,
      });

      if (response.status === 200) {
        setMessage('');
        setSenderEmail('');
        setSubject('');
        setShowEmailInput(false);
        toast.success(t("messages.success.messageSent"));
      } else {
        toast.error(t("messages.errors.failedToSendMessage"));
      }
    } catch (error) {
      toast.error(t("messages.errors.failedToSendMessage"));
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className={`section-container ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-white'
    }`}>
      <SectionTitle title={t("title")} />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl shadow-xl p-8`}
          >
            <h3 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
            }`}>
              {t("contactInformation")}
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">

                <div className={`text-2xl ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  <FaIdCard />
                </div>
                <div className="flex items-center gap-2">
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                    {t("form.nationality")}
                  </p>
                  <ReactCountryFlag
                    countryCode="TR"
                    svg
                    style={{
                      width: '1.5rem',
                      height: '1rem'
                    }}
                    title="Turkey"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`text-2xl ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  <FaMapMarkerAlt />
                </div>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {t("form.location")}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className={`text-2xl ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  <FaEnvelope />
                </div>
                <a 
                  href="mailto:baykalbekircan@yandex.com"
                  className={`hover:underline ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  baykalbekircan@yandex.com
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className={`text-2xl ${
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                }`}>
                  <FaLinkedin />
                </div>
                <a 
                  href="https://www.linkedin.com/in/bekircanbaykal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hover:underline ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {t("form.linkedinProfile")}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            } rounded-2xl shadow-xl p-8`}
          >
            <div className="flex items-center gap-3 mb-8">
              <h3 className={`text-2xl font-bold ${
                theme === 'dark' ? 'text-gray-100' : 'text-gray-900'
              }`}>
                <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                  {t("letsConnect")}
                </span>
              </h3>
              <div className={`flex-grow h-0.5 ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`} />
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <FaEnvelope className={
                  theme === 'dark' ? 'text-primary-400' : 'text-primary-600'
                } />
              </div>
            </div>
            <div className="space-y-6">
              <AnimatePresence>
                {showEmailInput && (
                  <motion.div className="space-y-4">
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder={t("form.subject")}
                        className={`w-full p-4 rounded-xl ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-100 placeholder-gray-400'
                            : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                        } focus:ring-2 focus:ring-primary-500 outline-none`}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <input
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder={t("form.email")}
                        className={`w-full p-4 rounded-xl ${
                          theme === 'dark'
                            ? 'bg-gray-700 text-gray-100 placeholder-gray-400'
                            : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                        } focus:ring-2 focus:ring-primary-500 outline-none`}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t("form.mailContentPlaceholder")}
                rows={6}
                className={`w-full h-32 p-4 rounded-xl resize-none ${
                  theme === 'dark'
                    ? 'bg-gray-700 text-gray-100 placeholder-gray-400'
                    : 'bg-gray-50 text-gray-900 placeholder-gray-500'
                } focus:ring-2 focus:ring-primary-500 outline-none`}
              />
              
              <div className="flex flex-col lg:flex-row gap-4">
                <motion.button
                  onClick={() => {
                    setShowEmailInput(false);
                    handleSendLinkedIn();
                  }}
                  disabled={!message.trim() || sending}
                  whileHover={message.trim() && !sending ? { scale: 1.05 } : undefined}
                  whileTap={message.trim() && !sending ? { scale: 0.95 } : undefined}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full
                    ${!message.trim() || sending
                      ? 'opacity-50 cursor-not-allowed bg-primary-300'
                      : 'bg-primary-600 hover:bg-primary-700'
                    } text-white font-light transition-all`}
                >
                  <FaLinkedin className="flex-shrink-0" />
                  <span className="whitespace-normal text-center text-sm">{t("buttons.sendAsLinkedIn")}</span>
                </motion.button>

                {!showEmailInput ? (
                  <motion.button
                    onClick={() => setShowEmailInput(true)}
                    disabled={!message.trim() || sending}
                    whileHover={message.trim() && !sending ? { scale: 1.05 } : undefined}
                    whileTap={message.trim() && !sending ? { scale: 0.95 } : undefined}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full
                      ${!message.trim() || sending
                        ? 'opacity-50 cursor-not-allowed border-2 border-gray-400 text-gray-400'
                        : `border-2 border-primary-600 ${
                            theme === 'dark'
                              ? 'text-primary-400 hover:bg-primary-900/30'
                              : 'text-primary-600 hover:bg-primary-50'
                          }`
                      } font-light transition-all`}
                  >
                    <FaEnvelope className="flex-shrink-0" />
                    <span className="whitespace-normal text-center text-sm">{t("buttons.sendAsEmail")}</span>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={handleSendEmail}
                    disabled={!message.trim() || !senderEmail.trim() || !subject.trim() || sending}
                    whileHover={message.trim() && senderEmail.trim() && !sending ? { scale: 1.05 } : undefined}
                    whileTap={message.trim() && senderEmail.trim() && !sending ? { scale: 0.95 } : undefined}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full
                      ${!message.trim() || !senderEmail.trim() || !subject.trim() || sending
                        ? 'opacity-50 cursor-not-allowed border-2 border-gray-400 text-gray-400'
                        : `border-2 border-primary-600 ${
                            theme === 'dark'
                              ? 'text-primary-400 hover:bg-primary-900/30'
                              : 'text-primary-600 hover:bg-primary-50'
                          }`
                      } font-light transition-all`}
                  >
                    <FaEnvelope className="flex-shrink-0" />
                    <span className="text-sm">{sending ? t("buttons.sending") : t("buttons.sendAsEmail")}</span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 