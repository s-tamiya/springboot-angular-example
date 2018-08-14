package com.mydevgeek;

import lombok.Data;

@Data
public class User {

  private Long id;
  private String firstName;
  private String lastName;
  private String email;

  @Override
  public String toString() {
	  String str = "";
	  str += "User : {";
	  str += "id : " + this.id + ", ";
	  str += "firstName : " + this.firstName + ", ";
	  str += "lastName : " + this.lastName + ", ";
	  str += "email : " + this.email + " ";
	  str += "}";
	  
	  return str;
  }
}
