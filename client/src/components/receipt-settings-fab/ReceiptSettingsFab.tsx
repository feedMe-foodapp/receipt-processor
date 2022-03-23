/* React */
import React, { useState } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    deleteReceipt
} from 'src/redux/features/receiptSlice';

import {
    clearResults
} from 'src/redux/features/ocrResultSlice';

import  {
    handleShow,
    setToastContent
} from 'src/redux/features/toastSlice';

/* Ionic */
import {
    IonFab,
    IonIcon,
    IonFabList,
    IonFabButton
} from '@ionic/react';

import {
    settingsOutline,
    trashBinOutline,
    informationCircleOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './ReceiptSettingsFab.module.scss';

const ReceiptSettingsFab: React.FC = () => {
    // const db = useIndexedDB('results');
    const dispatch = useDispatch();

    // showFabList
    const [showFabList, setShowFabList] = useState<boolean>(false);

    return (
        <IonFab
            className={
                showFabList ? `${styles.slide_left}` : `${styles.slide_right} ${styles.fab_container}`
            }
            vertical="bottom"
            horizontal="end">
            <IonFabButton 
                className={styles.open_list_fab}
                onClick={
                    () => {
                        setShowFabList(!showFabList);
                    }
                }>
                <IonIcon
                    className={`${styles.icon}`}
                    icon={settingsOutline}
                />
            </IonFabButton>
            <IonFabList
                className={styles.fab_list}
                side="top">
                <IonFabButton
                    className={styles.settings_btn}>
                    <IonIcon />
                </IonFabButton>
                <IonFabButton
                    className={styles.trash_btn}
                    onClick={
                        () => {
                            dispatch(deleteReceipt());
                            dispatch(setToastContent({
                                icon: informationCircleOutline,
                                message: 'Receipt cleared successfully',
                                color: '#77da85'
                            }));
                            dispatch(handleShow(true));
                            dispatch(clearResults());
                        }
                    }>
                    <IonIcon icon={trashBinOutline} />
                </IonFabButton>
            </IonFabList>
        </IonFab>
    );
};

export default ReceiptSettingsFab;