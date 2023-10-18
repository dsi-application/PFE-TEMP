import React, { Component } from "react";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { Link } from 'react-router-dom';
import esprit from '../../../images/esprit2022.png';
import { CButton, CCard, CCardBody, CCardGroup, CCol, CContainer, CForm, CInput,
  CInputGroup, CInputGroupPrepend, CInputGroupText, CRow, CTooltip } from '@coreui/react';

import AuthService from "../../../services/auth.service";
import '../../../css/style.css';
import { Wave, Random } from "react-animated-text";


import CIcon from '@coreui/icons-react';
import { freeSet } from '@coreui/icons';

import Spinner from "react-bootstrap/Spinner";
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Text from "antd/lib/typography/Text";
import Tour from "reactour";


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
                <span className="pinkAlert">Cher(e),</span><br/>
                <span className="pinkAlert">Vous êtes</span>&nbsp;
                <span className="pinkAlertBold">Étudiant(e)</span>&nbsp;
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
                <span className="pinkAlertBold">Étudiant(e)</span>&nbsp;:
                <br/><br/>
                Veuillez insérer votre <ins>Identifiant</ins>
                <br/>
                Exemple : <span className="purpleMarkCourrier">326JFT5871</span>
            </Text>
        ),
    },
    {
        selector: '[data-tut="step3"]',
        content: () => (
            <Text>
                En tant que&nbsp;
                <span className="pinkAlertBold">Étudiant(e)</span>&nbsp;:
                <br/><br/>
                Vous devez insérer votre <ins>Mot de Passe</ins> que vous avez changé lors de votre première visite.
            </Text>
        ),
    },
    {
        selector: '[data-tut="step4"]',
        content: () => (
            <Text>
                En tant que&nbsp;
                <span className="pinkAlertBold">Étudiant(e)</span>&nbsp;:
                <br/><br/>
                Merci de cliquer sur ce bouton pour accéder.
            </Text>
        )
    },
    {
        selector: '[data-tut="step5"]',
        content: () => (
            <Text>
                En tant que&nbsp;
                <span className="pinkAlertBold">Étudiant(e)</span>&nbsp;:
                <br/><br/>
                En cas où vous avez oublié votre Mot de Passe.
                <br/>
                Vous êtes invités à cliquer sur le lien &nbsp;
                <a href="https://pfe.esprit.tn/forgotStudentPassword" target="_blank" rel="linkFP" style={{color:'blue'}}>Mot de Passe oublié ?</a>
            </Text>
        )
    },
    {
        selector: '[data-tut="step6"]',
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
//
export default class Student extends Component
{
    constructor(props)
    {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleReadMe = this.handleReadMe.bind(this);

        this.state =
        {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      });
    }

    onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }

    handleReadMe(e) {
        this.setState({
            tourOpen : true
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
              // // console.log('--------------------> TRY');
              AuthService.loginStudent(this.state.username, this.state.password).then(
                  response =>
                            {
                              // // console.log('-------------------------> ** ùùùùùù: ' + response.data.accessToken);
                                if (!response.data.accessToken)
                                {
                                    // // console.log('-------------------------> ** Sign-In 0');
                                    sessionStorage.setItem("student", JSON.stringify(response.data));
                                    if(response.data)
                                    this.props.history.push("/secureStudentPassword");
                                }

                                if (response.data.accessToken)
                                {
                                    // // console.log('-------------------------> ** Sign-In 1');
                                    sessionStorage.setItem("student", JSON.stringify(response.data));
                                    if(response.data)
                                    this.props.history.push("/synopsisAndNews");
                                }

                                // // console.log('-------------------------> ** Sign-In 1');
                                // // console.log(response.data)
                                // // console.log('-------------------------> ** Sign-In 2');


                                window.location.reload();

                                return response.data;
                            },
                            error =>
                            {
                                // // console.log('-------------- Error Authentication ');
                                // // console.log(error);

                                // // console.log('--------------------> FAILED');
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
                            }
            )
        }
        else
        {
            // // console.log('--------------------> LOAD: false');
            this.setState({ loading: false });
        }
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
                                        <h2>Authentification</h2>
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
                              <p className="text-muted">Connectez-vous à votre compte</p>
                              <br/><br/>
                              <CInputGroup className="mb-3" data-tut="step2">
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <PersonIcon color="action" fontSize="small"/>
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput placeholder="Identifiant" autoComplete="username"
                                        type="text" className="form-control" name="username"
                                        value={this.state.username} onChange={this.onChangeUsername}
                                        validations={[required]}/>
                              </CInputGroup>
                              <CInputGroup className="mb-4" data-tut="step3">
                                <CInputGroupPrepend>
                                  <CInputGroupText>
                                    <VpnKeyIcon color="action" fontSize="small"/>
                                  </CInputGroupText>
                                </CInputGroupPrepend>
                                <CInput placeholder="Mot de Passe" autoComplete="current-password"
                                        type="password" className="form-control" name="password"
                                        value={this.state.password} onChange={this.onChangePassword}
                                        validations={[required]}/>
                              </CInputGroup>
                              <CRow>
                                <CCol xs="6">
                                  <div className="form-group">
                                    <button data-tut="step4"
                                      className="btn btn-primary btn-block"
                                      disabled={this.state.loading}
                                    >
                                      {this.state.loading && (
                                        <Spinner size="sm" animation="grow" variant="light" />
                                      )}
                                      &nbsp;&nbsp;<span>Connecter</span>
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

                                <CCol xs="6" className="text-right">
                                  <Link to="/forgotStudentPassword">
                                    <CButton color="link" className="px-0" data-tut="step5">Mot de Passe oublié ?</CButton>
                                  </Link>
                                </CCol>

                              </CRow>
                               </Form>
                            </CForm>
                          </CCardBody>
                        </CCard>
                        <CCard className="text-white bg-light py-4">
                          <CCardBody className="text-center">
                              <CRow>
                                <CCol xs={7}></CCol>
                                <CCol xs={5}>
                                  <img src={esprit} alt="logo" title="Welcome to Esprit" height={50} width={100} data-tut="step1"/>
                                </CCol>
                              </CRow>
                              <br/><br/>
                              <span className="clignoteTitlePlatform">Gestion des Stages</span>
                              <br/>
                              <p className="userSpace">
                                  <Wave text="Espace Étudiant" effect="stretch" effectChange={1.2} />
                              </p>

                              <br/>
                              <Link to="/">
                                <CButton shape="pill" color="danger" data-tut="step6">
                                    <CTooltip content="Page d'Accueil" placement="top">
                                      <CIcon content={freeSet.cilHome} />
                                    </CTooltip>
                                </CButton>
                              </Link>
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
