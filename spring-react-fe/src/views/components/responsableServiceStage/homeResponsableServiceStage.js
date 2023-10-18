import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';
import {
	fetchRefusedReports,
	fetchStudentDoneSTNStat,
	fetchStudentPlanifSTNStat,
	fetchStudentToSTNStat,
	fetchUploadedReports,
	fetchValidatedReports,
	selectDepotStat,
	selectNbrRefusedReports,
	selectNbrUploadedReports,
	selectNbrValidatedReports,
	selectRefusedDepotStat,
	selectStudentsDoneStat,
	selectStudentsPLanifStat,
	selectStudentsToStat,
	selectUploadedDepotStat,
	selectValidatedDepotStat
} from "../../../redux/slices/DepotSlice";
import {Wave} from "react-animated-text";

import "../../css/style.css";

import {
	CButton,
	CCard,
	CCardBody,
	CCol,
	CContainer,
	CRow,
	CTooltip,
	CWidgetBrand,
	CWidgetProgressIcon
} from "@coreui/react";
import MainChartExample from '../../utils/charts/MainChartExample';

import {
	fectchServiceStat,
	fectchServiceStatEM,
	fectchServiceStatGC,
	selectServiceStat,
	selectServiceStatEM,
	selectServiceStatGC
} from "../../../redux/slices/StatSlice";

// npm install --save-dev @iconify/react @iconify-icons/mdi
import {Icon} from '@iconify/react';
import googleCirclesGroup from '@iconify-icons/mdi/google-circles-group';
import {withStyles} from '@material-ui/core/styles';
import TheSidebar from "../../../containers/TheSidebar";
import {
	selectNbrDemandesAnnulationConvention, selectNbrDemandesAnnulationConventionNotTreated,
	selectNbrDepositedConventions, selectNbrValidatedConventions,
} from "../../../redux/slices/ConventionSlice";


const useStyles = theme => ({
	root: {
		width: 'fit-content',
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		'& svg': {
			margin: theme.spacing(1.5),
		},
		'& hr': {
			margin: theme.spacing(0, 0.5),
		},
	},
});


const HomeResponsableServiceStage = () => {
	const dispatch = useDispatch();
	/*const [depotStat, errds] = useSelector(selectDepotStat);
	const [uploadedDepotStat, erruds] = useSelector(selectUploadedDepotStat);
	const [validatedDepotStat, errvds] = useSelector(selectValidatedDepotStat);
	const [refusedDepotStat, errrds] = useSelector(selectRefusedDepotStat);
	const [soutenancesNonPlanified, errsts] = useSelector(selectStudentsToStat);
	const [soutenancesPlanified, errsps] = useSelector(selectStudentsPLanifStat);
	const [soutenancesNotified, errsds] = useSelector(selectStudentsDoneStat);

	const [nbUploadedReports, errnur] = useSelector(selectNbrUploadedReports);
	const [nbValidatedReports, errnvr] = useSelector(selectNbrValidatedReports);
	const [nbIncompletedReports, errnir] = useSelector(selectNbrRefusedReports);

	const [ServiceStat, err] = useSelector(selectServiceStat);
	const [ServiceStatEM, err1] = useSelector(selectServiceStatEM);
	const [ServiceStatGC, err2] = useSelector(selectServiceStatGC);

	const [nbDemandesAnnulationConvention, errndac] = useSelector(selectNbrDemandesAnnulationConventionNotTreated);
	const [nbDepositedConventions, errndc] = useSelector(selectNbrDepositedConventions);
	const [nbValidatedConventions, errnvc] = useSelector(selectNbrValidatedConventions);

	const ServiceStatStatus = useSelector((state) => state.persistedReducer.stat.ServiceStatStatus);
	const ServiceStatStatusEM = useSelector((state) => state.persistedReducer.stat.ServiceStatStatusEM);
	const ServiceStatStatusGC = useSelector((state) => state.persistedReducer.stat.ServiceStatStatusGC);*/

	/*useEffect(() => {
		dispatch(fetchStudentToSTNStat());
		dispatch(fetchStudentPlanifSTNStat());
		dispatch(fetchStudentDoneSTNStat());
		dispatch(fetchUploadedReports());
		dispatch(fetchValidatedReports());
		dispatch(fetchRefusedReports());
		dispatch(fectchServiceStat());
		dispatch(fectchServiceStatEM());
		dispatch(fectchServiceStatGC());
	}, [nbUploadedReports, nbValidatedReports, nbIncompletedReports]);*/

	return (
		<>
      PIKA
		</>
	);
};

export default withStyles(useStyles)(HomeResponsableServiceStage)

