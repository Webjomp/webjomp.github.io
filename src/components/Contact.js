import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

import 'material-design-lite/src/mdlComponentHandler';
import 'material-design-lite/src/progress/progress';
import 'material-design-lite/src/progress/_progress.scss';
import 'material-design-lite/src/snackbar/snackbar';
import 'material-design-lite/src/snackbar/_snackbar.scss';

class Contact extends React.Component {
  static cleanMessage() {
    Contact.disableSendFormButton(false);
    $('#form-is-sent-status')[0].MaterialSnackbar.cleanup_(); // eslint-disable-line no-underscore-dangle
  }

  static disableSendFormButton(isDisabled) {
    $("#contact-form :input[type='submit']").prop('disabled', isDisabled);
  }

  static setCc() {
    const ccValue = $('#receive-copy').prop('checked') ? $('#email').val() : '';
    $('#form-cc').attr('value', ccValue);
  }

  showMessage = (message) => {
    const { intl } = this.props;

    const snackbarContainer =
      $('#form-is-sent-status')[0] || $('#form-is-sent-status');

    const data = {
      message,
      timeout: 60000,
      actionHandler: Contact.cleanMessage,
      actionText: intl.formatMessage({
        id: 'contact.form.confirm.close',
      }),
    };

    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  };

  submitContactForm = (e) => {
    const { intl } = this.props;
    e.preventDefault();

    const form = $('#contact-form');

    Contact.setCc();
    Contact.disableSendFormButton(true);

    const user = 'fxlemire';
    const domain = 'webjomp' + '.' + 'com'; // eslint-disable-line no-useless-concat
    const url = `https://formspree.io/${user}@${domain}`;
    const data = form.serialize();

    $('#send-progress').css('visibility', 'visible');

    $.post(url, data, (body, statusText, res) => {
      $('#send-progress').css('visibility', 'hidden');

      try {
        if (res.status === 200) {
          const w = window.open();

          if (!w) {
            this.showMessage(
              intl.formatMessage({
                id: 'contact.form.confirm.popup',
              }),
            );
          } else {
            w.document.open();
            w.document.write(body);
            w.document.close();
            w.focus();

            this.showMessage(
              intl.formatMessage({
                id: 'contact.form.confirm.success',
              }),
            );
          }
        } else {
          throw new Error(res);
        }
      } catch (error) {
        this.showMessage(
          intl.formatMessage({ id: 'contact.form.confirm.error' }),
        );
      }
    });

    return false;
  };

  render() {
    const { intl } = this.props;

    return (
      <section id="contact">
        <div className="inner">
          <section>
            <FormattedMessage id="contact.title" tagName="h2" />
            <form id="contact-form" method="post">
              <div className="field half first">
                <label htmlFor="name">
                  <FormattedMessage id="contact.form.name" />
                  <input type="text" name="name" id="name" required />
                </label>
              </div>
              <div className="field half">
                <label htmlFor="email">
                  <FormattedMessage id="contact.form.email" />
                  <input type="email" name="_replyto" id="email" required />
                </label>
              </div>
              <div className="field">
                <label htmlFor="topic">
                  <FormattedMessage id="contact.form.topic" />
                  <input type="text" name="_subject" id="topic" required />
                </label>
              </div>
              <div className="field">
                <label htmlFor="message">
                  <FormattedMessage id="contact.form.message" />
                  <textarea name="message" id="message" rows="6" required />
                </label>
              </div>

              <div className="field">
                <input type="checkbox" id="receive-copy" name="receive-copy" />
                <label htmlFor="receive-copy">
                  {' '}
                  {/* eslint-disable-line jsx-a11y/label-has-for */}
                  <FormattedMessage id="contact.form.receiveCopy" />
                </label>
              </div>

              <input type="hidden" name="_cc" id="form-cc" />
              <input type="hidden" name="_language" value={intl.locale} />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <ul className="actions">
                <li>
                  <FormattedMessage id="contact.form.send">
                    {(text) => (
                      <input
                        type="submit"
                        value={text}
                        className="special"
                        onClick={this.submitContactForm}
                      />
                    )}
                  </FormattedMessage>
                </li>
              </ul>

              <div
                id="send-progress"
                className="mdl-progress mdl-js-progress mdl-progress--indeterminate"
                style={{ visibility: 'hidden' }}
              />

              <div
                id="form-is-sent-status"
                className="mdl-js-snackbar mdl-snackbar"
              >
                <div className="mdl-snackbar__text" />
                <button
                  aria-label="Close confirmation"
                  className="mdl-snackbar__action"
                  type="button"
                />
              </div>
            </form>
          </section>

          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope" />
                <FormattedMessage id="contact.email" tagName="h3" />
                <a href="mailto:fxlemire@webjomp.com">fxlemire@webjomp.com</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-phone" />
                <FormattedMessage id="contact.phone" tagName="h3" />
                <a href="tel:+1-514-546-2694">(514) 546-2694</a>
              </div>
            </section>
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home" />
                <FormattedMessage id="contact.where" tagName="h3" />
                <span>Montréal, Québec</span>
              </div>
            </section>
          </section>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired,
  }).isRequired,
};

export default injectIntl(Contact);
