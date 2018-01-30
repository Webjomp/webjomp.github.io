import $ from 'jquery';
import React from 'react'

import 'material-design-lite/src/mdlComponentHandler.js';
import 'material-design-lite/src/progress/_progress.scss';
import 'material-design-lite/src/progress/progress.js';
import 'material-design-lite/src/snackbar/_snackbar.scss';
import 'material-design-lite/src/snackbar/snackbar.js';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.cleanMessage = this.cleanMessage.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.submitContactForm = this.submitContactForm.bind(this);
    }

    cleanMessage() {
        this.disableSendFormButton(false);
        $('#form-is-sent-status')[0].MaterialSnackbar.cleanup_();
    }

    disableSendFormButton(isDisabled) {
        $('#contact-form :input[type=\'submit\']').prop('disabled', isDisabled);
    }

    setCc() {
        const ccValue = $('#receive-copy').prop('checked') ? $('#email').val() : '';
        $('#form-cc').attr('value', ccValue);
    }

    showMessage(message) {
        const snackbarContainer = $('#form-is-sent-status')[0];

        const data = {
            message,
            timeout: 60000,
            actionHandler: this.cleanMessage,
            actionText: 'Fermer'
        };

        snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }

    submitContactForm(e) {
        e.preventDefault();

        const that = this;
        const form = $('#contact-form');

        that.setCc();
        that.disableSendFormButton(true);

        const user = 'fxlemire';
        const domain = 'webjomp' + '.' + 'com';
        const url = `https://formspree.io/${user}@${domain}`;
        const data = form.serialize();

        $('#send-progress').css('visibility', 'visible');

        $.ajax({
            data,
            url,
            method: 'POST',
            dataType: 'json',
            success: (data) => {
                $('#send-progress').css('visibility', 'hidden');
                that.showMessage('Votre message a bien été envoyé. Je vous contacterai sous peu!');
            },
            error: (err) => {
                $('#send-progress').css('visibility', 'hidden');
                that.showMessage('La transmission du formulaire a échoué. Veuillez réessayer plus tard.');
            }
        });

        return false;
    }

    render() {
        return (
            <section id="contact">
                <div className="inner">
                    <section>
                        <h2>Écrivez-nous</h2>
                        <form id="contact-form" method="post">
                            <div className="field half first">
                                <label htmlFor="name">Nom</label>
                                <input type="text" name="name" id="name" required />
                            </div>
                            <div className="field half">
                                <label htmlFor="email">Courriel</label>
                                <input type="email" name="_replyto" id="email" required />
                            </div>
                            <div className="field">
                                <label htmlFor="topic">Sujet</label>
                                <input type="text" name="_subject" id="topic" required />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="6" required></textarea>
                            </div>

                            <div className="field">
                                <input type="checkbox" id="receive-copy" name="receive-copy" />
                                <label htmlFor="receive-copy">Recevoir une copie</label>
                            </div>

                            <input type="hidden" name="_cc" id="form-cc" />
                            <input type="hidden" name="_language" value="fr" />
                            <input type="text" name="_gotcha" style={{display: 'none'}} />

                            <ul className="actions">
                                <li><input type="submit" value="Envoyer" className="special" onClick={this.submitContactForm}/></li>
                            </ul>

                            <div id="send-progress" className="mdl-progress mdl-js-progress mdl-progress--indeterminate" style={{ visibility: 'hidden' }}></div>

                            <div id="form-is-sent-status" className="mdl-js-snackbar mdl-snackbar" >
                                <div className="mdl-snackbar__text"></div>
                                <button className="mdl-snackbar__action" type="button"></button>
                            </div>
                        </form>
                    </section>

                    <section className="split">
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-envelope"></span>
                                <h3>Courriel</h3>
                                <a href="#">fxlemire@webjomp.com</a>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-phone"></span>
                                <h3>Téléphone</h3>
                                <span>(514) 546-2694</span>
                            </div>
                        </section>
                        <section>
                            <div className="contact-method">
                                <span className="icon alt fa-home"></span>
                                <h3>Lieu</h3>
                                <span>Montréal, Québec</span>
                            </div>
                        </section>
                    </section>
                </div>
            </section>
        );
    }
}

export default Contact
