package user;

import logica.UtenteManager;

public class presenzaNick {

	public static void main(String[] args) {
		
		boolean validatore;
		
		try {
			validatore=UtenteManager.verificaPresenzaUtente("Benito");
			if(validatore) {
				System.out.println("Benito c'�");
			}
			else {
				System.out.println("Benito non c'�");
			}
		} catch (Exception e) {
			
			e.printStackTrace();
		}

	}

}
