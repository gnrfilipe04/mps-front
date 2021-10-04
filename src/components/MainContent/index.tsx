import { DataGrid, GridColDef, GridRowsProp } from "@material-ui/data-grid";
import { ThemeProvider as ReactTheme } from "@material-ui/core/styles";
import { useAsideBar } from "../../contexts/AsideBarContext";
import { useEffect, useState } from "react";
import { reactTheme } from "../../styles/reactTheme";
import { api } from "../../services/api";
import { Configurations } from "../NextPages/Configurations";
import { ConfigProvider } from "../../contexts/ConfigContext";
import Modal from "@material-ui/core/Modal";
import isIp from "../../../node_modules/is-ip";
import { useSnackBar } from "../../contexts/SnackBarContext";
import { Validations } from "../Validations";
import Tooltip from "@material-ui/core/Tooltip";
import {
  AddIcon,
  Button,
  Container,
  ContainerAddIcon,
  ContainerInput,
  ContainerValidationIcon,
  ContainerRemoveIcon,
  Input,
  ModalBody,
  TitleModal,
  ValidationIcon,
  ModalValidation,
  HeaderContainer,
  RemoveIcon,
  ValidationContainer,
  ValidationContentProps,
  ValidationContentCounters,
  ValidationContainerItemProps,
  ValidationItemTitle,
  ValidationItemValue,
  ValidationContainerItemValue,
  ValidationItemLine,
  ValidationTitle,
  ValidationContainerSupplies,
} from "./styles";
import { IconButton } from "@material-ui/core";
import { MdClear } from "react-icons/md";
import { AxiosResponse } from "axios";
import { GridRowId } from "@mui/x-data-grid";

interface InventoryProps {
  manufacturer: string;
  serialNumber: string;
  model: string;
  firmwareVersion: string;
  local: string;
  operatingTime: string;
  contact: string;
  status: string;
  hostname: string;
  color: boolean;
}

interface SuppliesProps {
  id: number;
  suplieType: string;
  descr: string;
  partNumber: string;
  serialNumber: string;
  level: string;
}

interface AlertsProps {
  id: number;
  severity: string;
  group: string;
  code: string;
  time: string;
  description: string;
}

interface CountersProps {
  id: number;
  count: string;
  value: string;
}

interface PrinterValidationProps {
  ip: string;
  inventory: InventoryProps;
  supplies: SuppliesProps[];
  alerts: AlertsProps[];
  counters: CountersProps[];
}

export interface IPrinterProps {
  id: string;
  adress: string;
  reading: string;
  model: string;
  serieNumber: string;
  manifactore: string;
  uptime: string;
  lastStatus: string;
}

export const MainContent = () => {
  const { menuContent } = useAsideBar();
  const { changeOpenSnackbar, changeIsSucess } = useSnackBar();

  const [rowsSelectedId, setRowsSelectedId] = useState<GridRowId[]>([])
  const [removeEnable, setRemoveEnable] = useState(false)

  const [open, setOpen] = useState(false);
  const [openValidation, setOpenValidation] = useState(false);

  const [rows, setRows] = useState<GridRowsProp>([]);
  const [supliesRows, setSupliesRows] = useState<GridRowsProp>([])
  const [alertsRows, setAlertsRows] = useState<GridRowsProp>([])
  const [countersRows, setCountersRows] = useState<GridRowsProp>([])

  const [printerValidation, setPrinterValidation] = useState<PrinterValidationProps | undefined>();

  const [inputIp, setInputIp] = useState("");
  const [searchIpValue, setSearchIpValue] = useState("")

  const [isAddIp, setIsAddIp] = useState(false);

  const columns: GridColDef[] = [
    {
      field: "adress",
      headerName: "Endereço",
      width: 150,
      editable: false,
    },
    {
      field: "reading",
      headerName: "Leitura",
      width: 150,
      editable: false,
    },
    {
      field: "model",
      headerName: "Modelo",
      width: 200,
      editable: false,
    },
    {
      field: "serieNumber",
      headerName: "Número de Série",
      width: 190,
      editable: false,
    },
    {
      field: "manifactore",
      headerName: "Fabricante",
      width: 170,
      editable: false,
    },
    {
      field: "uptime",
      headerName: "Tempo de atividade",
      width: 210,
      editable: false,
    },
  ];

  const supliesColumns: GridColDef[] = [
    { field: "suplieType", headerName: "Suplie type", width: 150 },
    { field: "descr", headerName: "Descr", width: 200 },
    { field: "partNumber", headerName: "Part number", width: 200 },
    { field: "serialNumber", headerName: "Serial number", width: 200 },
    { field: "level", headerName: "Level", width: 200 },
  ];

  const alertsColums: GridColDef[] = [
    { field: "severity", headerName: "Severity", width: 150 },
    { field: "group", headerName: "Group", width: 200 },
    { field: "code", headerName: "Code", width: 200 },
    { field: "time", headerName: "Time", width: 200 },
    { field: "description", headerName: "Description", width: 200 },
  ];

  const countersColums: GridColDef[] = [
    { field: "count", headerName: "Contador", width: 200 },
    { field: "value", headerName: "Valor", width: 200 },
  ];

  async function getPrintersMonitory() {
    const response = await api.get("printers");
    setRows(response.data);
    setIsAddIp(false);
  }

  async function searchIP(ip: string){
    const isValidIp = isIp(ip);

    if(isValidIp){

      const response = await api.get(`searchip/${ip}`)
      const printerSelected: PrinterValidationProps[] = await response.data.search;
      
      setPrinterValidation(printerSelected[0])
      
      const getSuplies = printerSelected[0]?.supplies.map(item => {
        return {
          id: item.id,
          suplieType: item.suplieType,
          descr: item.descr,
          partNumber: item.partNumber,
          serialNumber: item.serialNumber,
          level: item.level,
        }
      })

      const getAlerts = printerSelected[0]?.alerts.map(item => {
        return {
          id: item.id,
          severity: item.severity,
          group: item.group,
          code: item.code,
          time: item.time,
          description: item.description,
        }
      })

      const getCounters = printerSelected[0]?.counters.map(item => {
        return {
          id: item.id,
          count: item.count,
          value: item.value,
        }
      })
      setSupliesRows(getSuplies ? getSuplies : [])
      setAlertsRows(getAlerts ? getAlerts : [])
      setCountersRows(getCounters ? getCounters : [])

      changeIsSucess(true);
      changeOpenSnackbar(true);

      setSearchIpValue('')
        
    }else {
      changeIsSucess(false);
      changeOpenSnackbar(true);
      setSearchIpValue('')

      return;
    }
  }

  async function insertIpPrinter() {
    const isValidIp = isIp(inputIp);

    if (isValidIp) {

      await api.post("printers", {
        ip: inputIp,
      });

      changeIsSucess(true);
      changeOpenSnackbar(true);

      setIsAddIp(true);
      setInputIp("");
      setOpen(false);
    } else {
      changeIsSucess(false);
      changeOpenSnackbar(true);

      return;
    }
  }

  useEffect(() => {
    getPrintersMonitory();
  }, [menuContent, isAddIp]);

  return (
    <Container>
      {menuContent === "monitorados" && (
        <>
          <ReactTheme theme={reactTheme}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={6}
              loading={rows.length <= 0 ? true : false}
              checkboxSelection={true}
              disableSelectionOnClick
              hideFooterSelectedRowCount={false}
              onSelectionModelChange={async (selectionModel) => {
                setRowsSelectedId(selectionModel)
                setRemoveEnable(selectionModel.length > 0 ? true : false)
 
              }}
              style={{ border: "none", color: "#fff" }}
            />
          </ReactTheme>
          {removeEnable && (
            <ContainerRemoveIcon>
            <Tooltip title="Excluir IP" placement="top" arrow>
              <IconButton onClick={() => {
                const rowIds = rowsSelectedId.map(item => {
                  return rows.filter(row => row.id == item)
                })
                /* const rowIds = rowsSelectedId.map(item => {
                  return rows.filter(row => row.id != item)
                }) */
                //setRows(rowIds)

                rowIds.map(async(item) => {
                  await api.delete(`/printers/${item[0].adress}`)
                  changeIsSucess(true);
                  changeOpenSnackbar(true);
                })
              }}>
                <RemoveIcon />
              </IconButton>
            </Tooltip>
          </ContainerRemoveIcon>
          )}
        
          <ContainerAddIcon>
            <Tooltip title="Adicionar IP" placement="top" arrow>
              <IconButton onClick={() => setOpen(true)}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          </ContainerAddIcon>

          <ContainerValidationIcon>
            <Tooltip title="Buscar IP" placement="top" arrow>
              <IconButton onClick={() => setOpenValidation(true)}>
                <ValidationIcon />
              </IconButton>
            </Tooltip>
          </ContainerValidationIcon>

          <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ModalBody>
              <ContainerInput>
                <TitleModal>Adicionar Ip</TitleModal>
                <Input
                  placeholder="Digite o Ip"
                  value={inputIp}
                  onChange={(e) => setInputIp(e.target.value)}
                />
                <Button onClick={() => insertIpPrinter()}>Ok</Button>
              </ContainerInput>
            </ModalBody>
          </Modal>

          <Modal
            open={openValidation}
            onClose={() => setOpenValidation(false)}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ModalValidation>
              <HeaderContainer>
                <div>
                  <Input
                  value={searchIpValue}
                  onChange={(e) => setSearchIpValue(e.target.value)} 
                  placeholder="Digite o IP" 
                  />
                  <Button 
                  onClick={() => searchIP(searchIpValue)}
                  style={{marginLeft: 5}}
                  >Buscar</Button>
                </div>
                <MdClear
                  color="#e3e3e3"
                  size={28}
                  cursor="pointer"
                  onClick={() => setOpenValidation(false)
                  }
                />
              </HeaderContainer>

              <ValidationContainer>
                <ValidationContentProps>
                  <ValidationContainerItemProps>
                    <ValidationTitle>Inventário</ValidationTitle>
                    <ValidationItemLine>
                      <div>
                        <ValidationItemTitle>Fabricante</ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>{printerValidation?.inventory.manufacturer}</ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>

                      <div>
                        <ValidationItemTitle>
                          Versão Firmware
                        </ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>
                          {printerValidation?.inventory.firmwareVersion}
                          </ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>

                      <div>
                        <ValidationItemTitle>Cor</ValidationItemTitle>
                          <ValidationContainerItemValue>
                          <ValidationItemValue>{printerValidation?.inventory.color === undefined 
                          ? '' 
                          : printerValidation?.inventory.color ? 'Sim' : 'Não'}</ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>
                    </ValidationItemLine>

                    <ValidationItemLine>
                      <div>
                        <ValidationItemTitle>Modelo</ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>
                          {printerValidation?.inventory.model}
                          </ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>

                      <div>
                        <ValidationItemTitle>
                          Tempo de Operação
                        </ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>
                          {printerValidation?.inventory.operatingTime}
                          </ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>

                      <div>
                        <ValidationItemTitle>Contato</ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>
                          {printerValidation?.inventory.contact}
                          </ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>
                    </ValidationItemLine>

                    <ValidationItemLine>
                      <div>
                        <ValidationItemTitle>
                          Número de série
                        </ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>{printerValidation?.inventory.serialNumber}</ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>

                      <div>
                        <ValidationItemTitle>Status</ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>{printerValidation?.inventory.status}</ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>

                      <div>
                        <ValidationItemTitle>Hostname</ValidationItemTitle>
                        <ValidationContainerItemValue>
                          <ValidationItemValue>{printerValidation?.inventory.hostname}</ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>
                    </ValidationItemLine>

                    <ValidationItemLine>
                      <div>
                        <ValidationItemTitle>Local</ValidationItemTitle>
                          <ValidationContainerItemValue>
                            <ValidationItemValue>
                            {printerValidation?.inventory.local}
                            </ValidationItemValue>
                        </ValidationContainerItemValue>
                      </div>
                    </ValidationItemLine>
                  </ValidationContainerItemProps>

                  <ValidationContainerSupplies>
                    <ValidationTitle>Suprimentos</ValidationTitle>
                    <ReactTheme theme={reactTheme}>
                      <DataGrid
                        rows={supliesRows}
                        columns={supliesColumns}
                        pageSize={6}
                        checkboxSelection={false}
                        disableSelectionOnClick
                        hideFooterSelectedRowCount={true}
                        style={{
                          border: "none",
                          color: "#fff",
                          fontSize: 12,
                        }}
                      />
                    </ReactTheme>
                  </ValidationContainerSupplies>

                  <ValidationContainerSupplies>
                    <ValidationTitle>Alertas</ValidationTitle>
                    <ReactTheme theme={reactTheme}>
                      <DataGrid
                        rows={alertsRows}
                        columns={alertsColums}
                        pageSize={6}
                        checkboxSelection={false}
                        disableSelectionOnClick
                        hideFooterSelectedRowCount={true}
                        style={{
                          border: "none",
                          color: "#fff",
                          fontSize: 12,
                        }}
                      />
                    </ReactTheme>
                  </ValidationContainerSupplies>
                </ValidationContentProps>

                <ValidationContentCounters>
                  <ValidationTitle>Contadores</ValidationTitle>
                  <ReactTheme theme={reactTheme}>
                    <DataGrid
                      rows={countersRows}
                      columns={countersColums}
                      pageSize={6}
                      checkboxSelection={false}
                      disableSelectionOnClick
                      hideFooterSelectedRowCount={true}
                      style={{
                        color: "#fff",
                        fontSize: 12,
                        height: "117vh",
                      }}
                    />
                  </ReactTheme>
                </ValidationContentCounters>
              </ValidationContainer>
            </ModalValidation>
          </Modal>
        </>
      )}

      {menuContent === "validações" && <Validations />}

      {menuContent === "configurações" && (
        <ConfigProvider>
          <Configurations />
        </ConfigProvider>
      )}
    </Container>
  );
};
