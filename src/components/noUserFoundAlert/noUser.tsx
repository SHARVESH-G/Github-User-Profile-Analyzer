import { Alert, AlertDescription} from "@/components/ui/alert";
import * as styles from "./noUsersStyles";

export function NoUserAlert() {
  return (
    <Alert className={styles.alertContainer}>
      <AlertDescription className={styles.alertDescription}>
        No user found with that name.
      </AlertDescription>
    </Alert>
  );
}
