package utilities;

import bean.Utente;

public abstract class Utilities {
	
	private static boolean loginSuccess;

	public static final boolean verificaPresenzaUtente(Utente utente) {
		if(utente!=null) {
			loginSuccess=true;
		}
		else {
			loginSuccess=false;
		}
		return loginSuccess;
		
	}
}
