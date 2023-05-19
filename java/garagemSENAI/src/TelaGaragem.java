import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TelaGaragem extends JFrame{
    public JPanel painelPrincipal;
    private JTextField txtModelo;
    private JTextField txtCapacidade;
    private JTextField txtQuantidade;
    private JTextField txtCor;
    private JTextField txtKM;
    private JButton btnCadastrar;
    private JButton btnTeste;
    private JTextArea txtRelatorios;
public TelaGaragem() {
    btnCadastrar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {// cadastrar
            Carro c = new Carro();
            c.setModelo(txtModelo.getText());
            c.setCapTanque(Integer.parseInt(txtCapacidade.getText()));
            c.setQtdTanque(Integer.parseInt(txtQuantidade.getText()));
            c.setCor(txtCor.getText());
            c.setKm(Integer.parseInt(txtKM.getText()));
            Main.garagem.add(c);

            System.out.println(Main.garagem.get(0).mostrarEstado());
        }
    });
}
}
