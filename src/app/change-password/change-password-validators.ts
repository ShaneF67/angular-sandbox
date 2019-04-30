import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ChangePasswordValidators {

    static checkOldPasswordIsCorrect(control: AbstractControl) : Promise<ValidationErrors | null>  {
        
        return new Promise((resolve) => {
            setTimeout(() => {
                if ((control.value as string) != 'password') {
                    resolve({ oldPassWrong: true})
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static checkPasswordsMatch(control: AbstractControl): ValidationErrors | null {

        let newPass = control.get('newPass');
        let confirmPass = control.get('confirmPass');

        if (newPass.value != confirmPass.value) {
            return {
                passwordsDoNotMatch: true
            }
        }
        return null;
    }

}