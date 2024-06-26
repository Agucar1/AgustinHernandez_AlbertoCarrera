let turnoIdToDelete;

function confirmDelete(turnoId) {
    turnoIdToDelete = turnoId;
    const deleteConfirmationModal = new bootstrap.Modal(document.getElementById('deleteConfirmationModal'));
    deleteConfirmationModal.show();
}


async function deleteTurno() {
    await deleteBy(turnoIdToDelete);
    const deleteConfirmationModal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmationModal'));
    deleteConfirmationModal.hide();
    location.reload();
    const deleteSuccessToast = new bootstrap.Toast(document.getElementById('deleteSuccessToast'));
    deleteSuccessToast.show();
};

async function deleteBy(turnoId) {
    try {
        const response = await fetch(`/turnos/${turnoId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error al eliminar el turno');
        }

        // Aquí se podría manejar la actualización de la UI, por ejemplo, eliminar la fila de la tabla

    } catch (error) {
        console.error('Error:', error);
    }
}