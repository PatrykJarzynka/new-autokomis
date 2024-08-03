interface Action {
    label: string;
    action: () => void;
}

export interface DialogActions {
    close: Action;
    confirm: Action
}