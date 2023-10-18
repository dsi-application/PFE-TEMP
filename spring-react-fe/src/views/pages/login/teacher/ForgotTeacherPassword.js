import React, { Component } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { Link } from 'react-router-dom';
import esprit from '../../../images/esprit.png';
import { CTooltip, CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInput, CInputGroup, CInputGroupPrepend, CInputGroupText, CRow } from '@coreui/react';
import CIcon from '@coreui/icons-react'
import Text from "antd/lib/typography/Text";
import Tour from "reactour";
import "../../../css/style.css";
import { freeSet } from '@coreui/icons';
import Modal from "react-modal";

import PersonIcon from '@material-ui/icons/Person';

import AuthService from "../../../services/auth.service";

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-30%, -70%)",
    },
};

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const steps = [
    {
        selector: '[data-tut="step1"]',
        content: () => (
            <Text>
                <span className="pinkAlert">Madame/Monsieur,</span><br/>
                <span className="pinkAlert">Vous êtes</span>&nbsp;
                <span className="pinkAlertBold">Enseignant(e)</span>&nbsp;
                <span className="pinkAlert">?.</span>
                <br/><br/>
                Vous êtes la/le Bienvenue sur notre Plateforme :)
            </Text>
        ),
    },
    {
        selector: '[data-tut="step2"]',
        content: () => (
            <Text>
                En tant que&nbsp;
                <span className="pinkAlertBold">Enseignant(e)</span>&nbsp;:
                <br/><br/>
                Veuillez insérer votre <ins>Adresse E-Mail</ins>
                <br/>
                Exemple : <span className="purpleMarkCourrier">saria.essid@esprit.tn</span>
            </Text>
        ),
    },
    {
        selector: '[data-tut="step3"]',
        content: () => (
            <Text>
                En tant que&nbsp;
                <span className="pinkAlertBold">Enseignant(e)</span>&nbsp;:
                <br/><br/>
                Merci de cliquer sur ce bouton pour génerer votre propre Token.
                <br/>
                Ensuite, vous êtes invité(e)s à consulter&nbsp;
                <span className="purpleMarkCourrier">votre boite Mail</span>&nbsp;
                pour initialiser votre Mot de Passe.
            </Text>
        )
    },
    {
        selector: '[data-tut="step4"]',
        content: () => (
            <Text>
                En tant que&nbsp;
                <span className="pinkAlertBold">Enseignant(e)</span>&nbsp;:
                <br/><br/>
                En cas où vous vous souvenez de votre Mot de Passe.
                <br/>
                Priére de retourner via le lien &nbsp;
                <a href="https://pfe.esprit.tn/teacher" target="_blank" rel="linkFP" style={{color:'blue'}}>Mot de passe connu !</a>
            </Text>
        )
    },
    {
        selector: '[data-tut="step5"]',
        content: () => (
            <Text>
                <center>
                    <span className="pinkAlertBold">Bonne visite</span>
                    <br/>
                    <span className="pinkAlertBold">À très bientôt :)</span>
                </center>
            </Text>
        )
    }
];


export default class ForgotTeacherPassword extends Component
{
    constructor(props)
    {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleReadMe = this.handleReadMe.bind(this);
        this.closeModalResult = this.closeModalResult.bind(this);


        this.state = {
            username: "",
            password: "",
            loading: false,
            message: "",
            tourOpen : false,
            verifyExistMail: "INIT",
            showModalResult: false
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    closeModalResult()
    {
        this.setState({
            showResult: false
        });
        this.state.showResult = false;
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e)
    {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0)
        {
            // console.log('-----------------HELP 1---> TRY: ', this.state.username);
            AuthService.applyToInitializeMyOwnPassword(this.state.username).then(
                response =>
                {
                    this.state.loading = false;
                    this.setState({
                        loading: false,
                        verifyExistMail: response.data,
                        showModalResult: true
                    });

                    // console.log('Renew Password ----HELP 2---------------------> ** Sign-In 0', response.data);
                    // sessionStorage.setItem("teacher", JSON.stringify(response.data));
                    /*if(response.data)
                    {
                        console.log('Renew Password ------------HELP 3-------------> ** Sign-In 1');
                    }*/
                        //this.props.history.push("/renewTeacherPassword");



                    // console.log(response.data)
                    // console.log('Renew Password -------------------------> ** Sign-In 2');


                    //window.location.reload();

                    return response.data;
                },
                error =>
                {
                    // console.log('Renew Password -------------- Error Authentication ');
                    // console.log(error);

                    // console.log('Renew Password --------------------> FAILED');
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                    // this.logout();
                }
            )
        } else {
            // console.log('--------------------> LOAD: false');
            this.setState({
                loading: false
            });
        }
    }

    handleReadMe(e) {
        this.setState({
            tourOpen : true
        });
    }

    render()
    {
        return (
            <div>
                <div className="c-app c-default-layout flex-row align-items-center">
                    <CContainer>
                        <CRow className="justify-content-center">
                            <CCol md="8">
                                <CCardGroup>
                                    <CCard className="p-4">
                                        <CCardBody>
                                            <CForm>

                                                <CRow>
                                                    <CCol md="9">
                                                        <h2>Oubli Mot de Passe</h2>
                                                    </CCol>
                                                    <CCol md="3">
                                                        <span className="readMeIcon" onClick={() => {this.handleReadMe()}}/>
                                                    </CCol>
                                                </CRow>

                                                <Tour  steps={steps}
                                                       isOpen={this.state.tourOpen}
                                                       onRequestClose={() => {this.setState({tourOpen: false});}}/>

                                                <Form
                                                    onSubmit={this.handleLogin}
                                                    ref={c => {
                                                        this.form = c;
                                                    }}
                                                >
                                                    <p className="text-muted">Récupérer mon Mot de Passe oublié</p>
                                                    <br/><br/>
                                                    <CInputGroup className="mb-3">
                                                        <CInputGroupPrepend>
                                                            <CInputGroupText>
                                                                <PersonIcon color="action" fontSize="small"/>
                                                            </CInputGroupText>
                                                        </CInputGroupPrepend>
                                                        <CInput placeholder="Adresse E-Mail" autoComplete="username" data-tut="step2"
                                                                type="text" className="form-control" name="username"
                                                                value={this.state.username} onChange={this.onChangeUsername}
                                                                validations={[required]}/>
                                                    </CInputGroup>
                                                    <CRow>
                                                        <CCol xs="6">
                                                            <div className="form-group">
                                                                <button data-tut="step3"
                                                                    className="btn btn-primary btn-block"
                                                                    disabled={this.state.loading}
                                                                >
                                                                    {this.state.loading === true && (
                                                                        <span className="spinner-border spinner-border-sm"></span>
                                                                    )}
                                                                    &nbsp;&nbsp;
                                                                    <span>Récupérer</span>
                                                                </button>
                                                            </div>

                                                            {this.state.message && (
                                                                <div className="form-group">
                                                                    <div className="alert alert-danger" role="alert">
                                                                        {this.state.message}
                                                                    </div>
                                                                </div>
                                                            )}
                                                            <CheckButton
                                                                style={{ display: "none" }}
                                                                ref={c => {
                                                                    this.checkBtn = c;
                                                                }}
                                                            />
                                                        </CCol>

                                                        {this.state.showModalResult && (
                                                            <Modal
                                                                isOpen={this.state.showModalResult}
                                                                contentLabel="Example Modal"
                                                                style={customStyles}
                                                            >
                                                                <span className="warningIcon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Information</span>
                                                                <hr/>
                                                                <center>
                                                                    <br />
                                                                    {
                                                                        this.state.verifyExistMail === "ALLOW" &&
                                                                        <>
                                            <span className="greenAlert">
                                                Requête Envoyée.
                                            </span>
                                                                            <br/>
                                                                            <span className="note">
                                                Vous êtes invité(e)s à consulter votre boite Mail pour initialiser votre Mot de Passe.
                                            </span>

                                                                            <br />
                                                                            <br />
                                                                            <br />
                                                                            <Link to={"/renewMyTeacherPassword"}>
                                                                                <button
                                                                                    className="btn btn-sm btn-success"
                                                                                    onClick={() => {
                                                                                        this.closeModalResult();
                                                                                    }}
                                                                                >
                                                                                    Ok
                                                                                </button>
                                                                            </Link>
                                                                        </>
                                                                    }
                                                                    {
                                                                        this.state.verifyExistMail === "DENY" &&
                                                                        <>
                                        <span className="redAlert">
                                            Mail Inexistant !.
                                        </span>
                                                                            <br/>
                                                                            <span className="note">
                                            Vous êtes appelé(e)s à vérifier votre saisie.
                                        </span>

                                                                            <br />
                                                                            <br />
                                                                            <br />
                                                                            <button
                                                                                className="btn btn-sm btn-danger"
                                                                                onClick={() => {this.setState({
                                                                                    showResult: false
                                                                                });
                                                                                    this.state.username = "";
                                                                                    this.state.showModalResult = false;
                                                                                }}
                                                                            >
                                                                                Ok, I'll try again
                                                                            </button>
                                                                        </>
                                                                    }

                                                                    <br />
                                                                    <br />
                                                                </center>
                                                            </Modal>
                                                        )}

                                                        <CCol xs="6" className="text-right">
                                                            <Link to="/teacher">
                                                                <CButton color="link" className="px-0" data-tut="step4">Mot de Passe connu !</CButton>
                                                            </Link>
                                                        </CCol>

                                                    </CRow>
                                                </Form>
                                            </CForm>
                                        </CCardBody>
                                    </CCard>
                                    <CCard className="text-white bg-light py-4">
                                        <CCardBody className="text-center">
                                            <div>
                                                <CRow>
                                                    <CCol xs={8}></CCol>
                                                    <CCol xs={4}>
                                                        <img src={esprit} alt="logo" title="Welcome to Esprit" height={50} width={100} data-tut="step1"/>
                                                    </CCol>
                                                </CRow>

                                                <br/><br/>
                                                <span className="platformTitle">Gestion des Stages</span>

                                                <br/>
                                                <p className="userSpace">Espace Encadrant Académique</p>

                                                <br/>
                                                <Link to="/">
                                                    <CButton shape="pill" color="danger" data-tut="step5">
                                                        <CTooltip content="Page d'Accueil" placement="top">
                                                            <CIcon content={freeSet.cilHome} />
                                                        </CTooltip>
                                                    </CButton>
                                                </Link>
                                            </div>
                                        </CCardBody>
                                    </CCard>
                                </CCardGroup>
                            </CCol>
                        </CRow>
                    </CContainer>
                </div>
            </div>
        );
    }
}
