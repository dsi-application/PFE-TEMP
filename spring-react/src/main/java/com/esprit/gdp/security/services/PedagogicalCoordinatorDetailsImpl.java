package com.esprit.gdp.security.services;

import java.util.Collection;
import java.util.Objects;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.esprit.gdp.models.PedagogicalCoordinator;
import com.fasterxml.jackson.annotation.JsonIgnore;

public class PedagogicalCoordinatorDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;

	private String id;

	private String name;
	
	private String lastName;
	
	private String email;
	
	private String numTelephone;
	
	private String adresse;
	
	private String cinpass;
	

	@JsonIgnore
	private String password;

	private Collection<? extends GrantedAuthority> authorities;

	public PedagogicalCoordinatorDetailsImpl(String id, String adresse, String email) {
		this.id = id;
		this.adresse = adresse;
		this.email = email;
	}
	
	public PedagogicalCoordinatorDetailsImpl(String id, String adresse, String email, String password,
			Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.adresse = adresse;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
	}
	
	public PedagogicalCoordinatorDetailsImpl(String id, String password) {
		this.id = id;
		this.password = password;
	}

	public static PedagogicalCoordinatorDetailsImpl build(PedagogicalCoordinator pedagogicalCoordinator) {
		
		String combinedPassowrd = pedagogicalCoordinator.getPwdJWTPC();
		String encodedPassword = combinedPassowrd.substring(0, combinedPassowrd.lastIndexOf("$$$$$"));
		
		return new PedagogicalCoordinatorDetailsImpl(
				pedagogicalCoordinator.getLogin(),
				encodedPassword);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getNumTelephone() {
		return numTelephone;
	}

	public void setNumTelephone(String numTelephone) {
		this.numTelephone = numTelephone;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getCinpass() {
		return cinpass;
	}

	public void setCinpass(String cinpass) {
		this.cinpass = cinpass;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		PedagogicalCoordinatorDetailsImpl pedagogicalCoordinatorCS = (PedagogicalCoordinatorDetailsImpl) o;
		return Objects.equals(id, pedagogicalCoordinatorCS.id);
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return null;
	}

}
