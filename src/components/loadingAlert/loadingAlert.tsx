import { Alert, AlertDescription} from "@/components/ui/alert";
import * as styles from "./loadingAlertStyles";

export function LoadingAlert() {
  return (
    <Alert className={styles.alertContainer}>
      <AlertDescription className={styles.alertDescription}>
        Loading
      </AlertDescription>
    </Alert>
  );
}
