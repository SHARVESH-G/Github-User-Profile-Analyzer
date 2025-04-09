import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import * as styles from "./searchAlertStyles";

export function SearchAlert() {
  return (
    <Alert className={styles.alertContainer}>
      <AlertTitle className={styles.alertTitle}>Search</AlertTitle>
      <AlertDescription className={styles.alertDescription}>
        Search for the username to fetch repositories.
      </AlertDescription>
    </Alert>
  );
}
