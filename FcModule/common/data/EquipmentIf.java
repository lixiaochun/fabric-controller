package msf.fc.common.data;

import java.io.Serializable;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinColumns;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.apache.commons.lang.builder.ReflectionToStringBuilder;

import msf.fc.common.exception.MsfException;
import msf.fc.db.SessionWrapper;

@Entity
@Table(name = "equipment_ifs")
@NamedQuery(name = "EquipmentIf.findAll", query = "SELECT e FROM EquipmentIf e")
public class EquipmentIf implements Serializable {
  private static final long serialVersionUID = 1L;

  @EmbeddedId
  private EquipmentIfPK id;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumns({
      @JoinColumn(name = "equipment_type_id", referencedColumnName = "equipment_type_id", insertable = false, updatable = false),
      @JoinColumn(name = "sw_cluster_id", referencedColumnName = "sw_cluster_id", insertable = false, updatable = false) })
  private Equipment equipment;

  public EquipmentIf() {
  }

  public EquipmentIfPK getId() {
    return this.id;
  }

  public void setId(EquipmentIfPK id) {
    this.id = id;
  }

  public Equipment getEquipment() throws MsfException {
    return SessionWrapper.getLazyLoadData(this.equipment);
  }

  public void setEquipment(Equipment equipment) {
    this.equipment = equipment;
  }

  @Override
  public String toString() {
    return new ReflectionToStringBuilder(this)
        .setExcludeFieldNames(new String[] { "equipment" })
        .toString();
  }

}