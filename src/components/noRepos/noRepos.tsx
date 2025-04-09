import { Alert, AlertDescription} from "@/components/ui/alert";
import * as styles from "./noReposStyles";

export function NoResposFound() {
  return (
    <Alert className={styles.alertContainer}>
      <AlertDescription className={styles.alertDescription}>
        No repositories found
      </AlertDescription>
    </Alert>
  );
}
